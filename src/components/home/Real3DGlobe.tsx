"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import {
  MapPin,
  RotateCcw,
  ShieldCheck,
  Compass,
  ZoomIn,
  ZoomOut,
  Play,
  Pause,
  ArrowRight,
  Anchor,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface PortDestination {
  id: string;
  name: string;
  country: string;
  port: string;
  lat: number;
  lon: number;
  corridor: string;
  transitDays: string;
  vesselFrequency: string;
  handledScrap: string[];
  colorHex: number;
}

export default function Real3DGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal } = useQuoteModal();

  const [activePortId, setActivePortId] = useState<string>("dubai");
  const [selectedCorridor, setSelectedCorridor] = useState<string>("all");
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [hoveredPort, setHoveredPort] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const globeGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const markersRef = useRef<{ id: string; mesh: THREE.Mesh; pos: THREE.Vector3 }[]>([]);
  const isInteractingRef = useRef<boolean>(false);
  const isAutoSpinRef = useRef<boolean>(true);

  // Verified Port Destinations and trade routes from Surat
  const destinations: PortDestination[] = useMemo(
    () => [
      {
        id: "dubai",
        name: "Dubai / Jebel Ali",
        country: "United Arab Emirates",
        port: "Jebel Ali Port",
        lat: 25.01,
        lon: 55.06,
        corridor: "middle-east",
        transitDays: "4–6 Days",
        vesselFrequency: "3–4 Sailings / Week",
        handledScrap: ["6063 Extrusions", "Tense / Tabor", "Aluminium Wheels"],
        colorHex: 0x39b54a,
      },
      {
        id: "singapore",
        name: "Singapore / PSA",
        country: "Singapore",
        port: "Port of Singapore",
        lat: 1.29,
        lon: 103.85,
        corridor: "southeast-asia",
        transitDays: "6–8 Days",
        vesselFrequency: "Daily Direct Sailings",
        handledScrap: ["Aluminium UBC Bales", "Extrusion Scrap", "Mixed Scrap"],
        colorHex: 0x38bdf8,
      },
      {
        id: "rotterdam",
        name: "Rotterdam",
        country: "Netherlands",
        port: "Port of Rotterdam",
        lat: 51.92,
        lon: 4.47,
        corridor: "europe",
        transitDays: "22–26 Days",
        vesselFrequency: "Weekly Line Services",
        handledScrap: ["Clean 6063 Scrap", "Aluminium Cast", "ISRI Standard Bales"],
        colorHex: 0x4ed060,
      },
      {
        id: "shanghai",
        name: "Shanghai",
        country: "China",
        port: "Port of Shanghai",
        lat: 31.23,
        lon: 121.47,
        corridor: "east-asia",
        transitDays: "14–18 Days",
        vesselFrequency: "Bi-Weekly Sailings",
        handledScrap: ["Alloy Wheel Scrap", "Cast Aluminium Scrap", "Profile Off-cuts"],
        colorHex: 0x38bdf8,
      },
      {
        id: "antwerp",
        name: "Antwerp",
        country: "Belgium",
        port: "Port of Antwerp",
        lat: 51.22,
        lon: 4.4,
        corridor: "europe",
        transitDays: "24–28 Days",
        vesselFrequency: "Weekly Container Service",
        handledScrap: ["Secondary Ingot Stock", "Extrusion Profiles", "Tabor Scrap"],
        colorHex: 0x4ed060,
      },
      {
        id: "dammam",
        name: "Dammam / Riyadh Gateway",
        country: "Saudi Arabia",
        port: "King Abdulaziz Port",
        lat: 26.43,
        lon: 50.1,
        corridor: "middle-east",
        transitDays: "5–7 Days",
        vesselFrequency: "2 Sailings / Week",
        handledScrap: ["Tense Cast Scrap", "Industrial Clippings", "Extrusion Billets"],
        colorHex: 0x39b54a,
      },
      {
        id: "busan",
        name: "Busan",
        country: "South Korea",
        port: "Port of Busan",
        lat: 35.1,
        lon: 129.04,
        corridor: "east-asia",
        transitDays: "16–20 Days",
        vesselFrequency: "Weekly Direct Service",
        handledScrap: ["A356 Automotive Wheels", "Foundry Castings", "Clean Remelt Scrap"],
        colorHex: 0x38bdf8,
      },
    ],
    []
  );

  const activePort = destinations.find((d) => d.id === activePortId) || destinations[0];

  // Helper to convert Lat/Long to 3D Cartesian coordinates on sphere
  const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  };

  // Smoothly rotate the globe to target latitude and longitude
  const rotateToLocation = (lat: number, lon: number) => {
    if (!globeGroupRef.current) return;

    // Convert longitude to rotation Y
    const targetY = -((lon * Math.PI) / 180) + Math.PI / 2;
    const targetX = ((lat * Math.PI) / 180) * 0.45;

    const startY = globeGroupRef.current.rotation.y;
    const startX = globeGroupRef.current.rotation.x;
    const startTime = performance.now();
    const duration = 1000;

    const animateRotation = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Smooth cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);

      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y = startY + (targetY - startY) * ease;
        globeGroupRef.current.rotation.x = startX + (targetX - startX) * ease;
      }

      if (progress < 1) {
        requestAnimationFrame(animateRotation);
      }
    };

    requestAnimationFrame(animateRotation);
  };

  const handleSelectPort = (port: PortDestination) => {
    setActivePortId(port.id);
    setSelectedCorridor(port.corridor);
    rotateToLocation(port.lat, port.lon);
  };

  const handleResetToSurat = () => {
    setActivePortId("");
    setSelectedCorridor("all");
    rotateToLocation(21.17, 72.83); // Surat
  };

  const handleZoom = (delta: number) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.z = Math.max(3.4, Math.min(7.2, cameraRef.current.position.z + delta));
  };

  useEffect(() => {
    isAutoSpinRef.current = isAutoRotating;
  }, [isAutoRotating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Three.js Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;
    cameraRef.current = camera;

    // 2. High-performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Globe Container Group
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Initial position facing Surat, India
    globeGroup.rotation.y = -1.25;
    globeGroup.rotation.x = 0.28;

    const globeRadius = 1.95;

    // 4. Earth Sphere Texture & Material
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/textures/earth-map.jpg", () => {
      renderer.render(scene, camera);
    });
    earthTexture.colorSpace = THREE.SRGBColorSpace;
    earthTexture.anisotropy = 4;

    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.12,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // 5. Dual Atmosphere Halos for photoreal glow
    const innerHaloGeo = new THREE.SphereGeometry(globeRadius * 1.02, 48, 48);
    const innerHaloMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.14,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(innerHaloGeo, innerHaloMat));

    const outerHaloGeo = new THREE.SphereGeometry(globeRadius * 1.14, 32, 32);
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0x075ea8,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(outerHaloGeo, outerHaloMat));

    // 6. Multi-directional Lighting so all continents stay clearly visible
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 4, 6);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.0);
    fillLight.position.set(-5, 2, 4);
    scene.add(fillLight);

    const rearRimLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    rearRimLight.position.set(0, -4, -5);
    scene.add(rearRimLight);

    // 7. Surat Origin Marker: Vibrant Green Beacon + Triple Radar Rings
    const suratLat = 21.1702;
    const suratLon = 72.8311;
    const suratPos = latLonToVector3(suratLat, suratLon, globeRadius);

    const suratBeaconGeo = new THREE.SphereGeometry(0.05, 16, 16);
    const suratBeaconMat = new THREE.MeshBasicMaterial({ color: 0x39b54a });
    const suratBeacon = new THREE.Mesh(suratBeaconGeo, suratBeaconMat);
    suratBeacon.position.copy(suratPos);
    globeGroup.add(suratBeacon);

    // Animated Pulse Ring
    const pulseRingGeo = new THREE.RingGeometry(0.065, 0.095, 32);
    const pulseRingMat = new THREE.MeshBasicMaterial({
      color: 0x4ed060,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const pulseRing = new THREE.Mesh(pulseRingGeo, pulseRingMat);
    pulseRing.position.copy(suratPos.clone().multiplyScalar(1.01));
    pulseRing.lookAt(suratPos.clone().multiplyScalar(2));
    globeGroup.add(pulseRing);

    // 8. Destination Markers and 3D Shipping Arcs with animated pulse packets
    const markers: { id: string; mesh: THREE.Mesh; pos: THREE.Vector3 }[] = [];
    const pulsePackets: { mesh: THREE.Mesh; curve: THREE.QuadraticBezierCurve3; t: number; speed: number }[] = [];

    destinations.forEach((dest) => {
      const destPos = latLonToVector3(dest.lat, dest.lon, globeRadius);

      // Clickable Port Pin
      const pinGeo = new THREE.SphereGeometry(0.038, 16, 16);
      const pinMat = new THREE.MeshStandardMaterial({
        color: dest.colorHex,
        emissive: dest.colorHex,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(destPos);
      pinMesh.userData = { portId: dest.id, portName: dest.name };
      globeGroup.add(pinMesh);

      markers.push({ id: dest.id, mesh: pinMesh, pos: destPos });

      // Calculate 3D Parabolic Arc
      const distance = suratPos.distanceTo(destPos);
      const midPoint = new THREE.Vector3().addVectors(suratPos, destPos).multiplyScalar(0.5);
      const elevation = globeRadius + distance * 0.32;
      midPoint.normalize().multiplyScalar(elevation);

      const curve = new THREE.QuadraticBezierCurve3(suratPos, midPoint, destPos);
      const arcPoints = curve.getPoints(50);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);

      const arcMat = new THREE.LineBasicMaterial({
        color: dest.colorHex,
        transparent: true,
        opacity: 0.6,
        linewidth: 2,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);

      // Light Particle moving along the arc from Surat to destination
      const packetGeo = new THREE.SphereGeometry(0.02, 12, 12);
      const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      globeGroup.add(packetMesh);

      pulsePackets.push({
        mesh: packetMesh,
        curve: curve,
        t: Math.random(),
        speed: 0.006 + Math.random() * 0.004,
      });
    });

    markersRef.current = markers;

    // 9. Raycasting for direct click and hover on 3D pins
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // 10. Interactive Drag & Spin Controls
    let isDragging = false;
    let previousPointer = { x: 0, y: 0 };
    let dragDistance = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      isInteractingRef.current = true;
      dragDistance = 0;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousPointer = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      setMousePos({ x: clientX - rect.left, y: clientY - rect.top });

      // Raycast hover check on pins
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markers.map((m) => m.mesh));
      if (intersects.length > 0) {
        const hitId = intersects[0].object.userData.portId;
        setHoveredPort(hitId);
        container.style.cursor = "pointer";
      } else {
        setHoveredPort(null);
        container.style.cursor = isDragging ? "grabbing" : "grab";
      }

      if (!isDragging || !globeGroupRef.current) return;

      const deltaX = clientX - previousPointer.x;
      const deltaY = clientY - previousPointer.y;
      dragDistance += Math.abs(deltaX) + Math.abs(deltaY);

      globeGroupRef.current.rotation.y += deltaX * 0.005;
      globeGroupRef.current.rotation.x += deltaY * 0.005;
      globeGroupRef.current.rotation.x = Math.max(-0.95, Math.min(0.95, globeGroupRef.current.rotation.x));

      previousPointer = { x: clientX, y: clientY };
    };

    const onPointerUp = (e: MouseEvent | TouchEvent) => {
      if (dragDistance < 8 && !("touches" in e)) {
        // Direct click detection on 3D pins
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(markers.map((m) => m.mesh));
        if (intersects.length > 0) {
          const hitId = intersects[0].object.userData.portId;
          const targetPort = destinations.find((d) => d.id === hitId);
          if (targetPort) {
            handleSelectPort(targetPort);
          }
        }
      }

      isDragging = false;
      setTimeout(() => {
        isInteractingRef.current = false;
      }, 2500);
    };

    // Wheel zoom
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(3.4, Math.min(7.2, camera.position.z + e.deltaY * 0.002));
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    dom.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // 11. Animation Loop
    let animationFrameId: number;
    let ringScale = 1;
    let ringGrowth = 1;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto rotation
      if (globeGroupRef.current && isAutoSpinRef.current && !isInteractingRef.current) {
        globeGroupRef.current.rotation.y += 0.0016;
      }

      // Surat radar pulse animation
      ringScale += 0.008 * ringGrowth;
      if (ringScale > 1.4) ringGrowth = -1;
      if (ringScale < 0.95) ringGrowth = 1;
      pulseRing.scale.set(ringScale, ringScale, ringScale);

      // Animate shipping packet pulses along 3D arcs
      pulsePackets.forEach((packet) => {
        packet.t += packet.speed;
        if (packet.t > 1) packet.t = 0;
        const currentPos = packet.curve.getPoint(packet.t);
        packet.mesh.position.copy(currentPos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      dom.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      dom.removeEventListener("wheel", onWheel);
      dom.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      earthTexture.dispose();
      innerHaloGeo.dispose();
      innerHaloMat.dispose();
      outerHaloGeo.dispose();
      outerHaloMat.dispose();
    };
  }, [destinations]);

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-navy-900/95 via-navy-950 to-navy-900/95 backdrop-blur-md">
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-[480px] sm:h-[580px] lg:h-[680px] cursor-grab active:cursor-grabbing relative"
      />

      {/* Floating Dynamic Tooltip on Hover */}
      {hoveredPort && (
        <div
          className="pointer-events-none absolute z-40 px-3 py-1.5 rounded-lg bg-navy-900/95 text-white text-xs font-semibold shadow-xl border border-brandGreen/40 backdrop-blur-md transition-all duration-75 flex items-center gap-1.5"
          style={{
            left: `${mousePos.x + 12}px`,
            top: `${mousePos.y - 32}px`,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-brandGreen animate-ping"></span>
          <span>{destinations.find((d) => d.id === hoveredPort)?.name}</span>
          <span className="text-slate-400 font-normal">
            ({destinations.find((d) => d.id === hoveredPort)?.country})
          </span>
        </div>
      )}

      {/* Top Interactive Corridor Selector */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none z-20">
        {/* Destination Port Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pointer-events-auto max-w-2xl">
          <button
            onClick={handleResetToSurat}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 backdrop-blur-md flex items-center gap-1.5 ${
              activePortId === ""
                ? "bg-brandGreen text-navy shadow-md scale-105"
                : "bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-white/10"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-brandGreen" />
            <span>Surat (Origin)</span>
          </button>

          {destinations.map((port) => (
            <button
              key={port.id}
              onClick={() => handleSelectPort(port)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 backdrop-blur-md ${
                activePortId === port.id
                  ? "bg-brandBlue text-white shadow-lg shadow-brandBlue/30 scale-105 border border-blue-400/40"
                  : "bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-white/10"
              }`}
            >
              {port.name}
            </button>
          ))}
        </div>

        {/* 3D Viewport Controls (Zoom In, Zoom Out, Auto-Rotate Toggle, Recenter) */}
        <div className="flex items-center gap-1.5 pointer-events-auto">
          <button
            onClick={() => handleZoom(-0.5)}
            className="p-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 shadow"
            title="Zoom In"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleZoom(0.5)}
            className="p-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 shadow"
            title="Zoom Out"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="p-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 shadow"
            title={isAutoRotating ? "Pause Rotation" : "Resume Rotation"}
            aria-label="Toggle auto rotation"
          >
            {isAutoRotating ? <Pause className="w-3.5 h-3.5 text-brandGreen" /> : <Play className="w-3.5 h-3.5 text-slate-400" />}
          </button>
          <button
            onClick={handleResetToSurat}
            className="p-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 shadow flex items-center gap-1.5 text-xs font-semibold"
            title="Recenter on Surat, India"
          >
            <RotateCcw className="w-3.5 h-3.5 text-brandGreen" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Floating Direct Interaction Hint */}
      <div className="hidden sm:flex absolute top-20 right-6 pointer-events-none z-20">
        <div className="px-3 py-1.5 rounded-lg bg-navy-900/80 backdrop-blur-sm border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-brandGreen animate-spin" />
          <span>Click & Drag to rotate 3D Earth • Scroll to Zoom</span>
        </div>
      </div>

      {/* Bottom Direct Route Card ("sab kuch sahi me direct hona chaiye") */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-5 sm:p-6 rounded-2xl bg-navy-900/98 backdrop-blur-lg border border-white/15 shadow-2xl z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Col 1: Route & Port Details */}
          <div className="md:col-span-4 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brandGreen/20 text-brandGreen border border-brandGreen/30">
                Direct Shipping Corridor
              </span>
              <span className="text-xs text-slate-400">
                Origin: <strong className="text-white">Surat, Gujarat</strong>
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
              <Anchor className="w-4 h-4 text-brandBlue" />
              <span>{activePort.name}</span>
            </h3>

            <p className="text-xs text-slate-300">
              Terminal: <span className="font-semibold text-white">{activePort.port}</span>, {activePort.country}
            </p>
          </div>

          {/* Col 2: Transit Metrics & Handled Scrap Grades */}
          <div className="md:col-span-5 grid grid-cols-2 gap-3 border-t md:border-t-0 md:border-x border-white/10 pt-3 md:pt-0 md:px-5">
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-brandGreen" />
                Transit Time
              </div>
              <div className="text-xs sm:text-sm font-bold text-brandGreen mt-0.5">
                {activePort.transitDays}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {activePort.vesselFrequency}
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1">
                <Layers className="w-3 h-3 text-brandBlue" />
                Key Scrap Categories
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1 line-clamp-2">
                {activePort.handledScrap.join(" • ")}
              </div>
            </div>
          </div>

          {/* Col 3: Direct Action CTA */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <button
              onClick={() => openQuoteModal("Aluminium Scrap", `${activePort.country} (${activePort.name})`)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brandBlue hover:bg-brandBlue-dark text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-200 active:scale-95 border border-blue-400/30 group"
            >
              <span>Inquire This Route</span>
              <ArrowRight className="w-3.5 h-3.5 text-brandGreen group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-[10px] text-slate-400 text-center mt-1.5">
              Direct pricing from Surat trading desk
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
