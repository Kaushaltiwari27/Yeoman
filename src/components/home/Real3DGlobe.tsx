"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MapPin, RotateCcw, ShieldCheck, Compass, Sparkles } from "lucide-react";

interface Corridor {
  id: string;
  name: string;
  region: string;
  desc: string;
  ports: string;
  lat: number;
  lon: number;
}

export default function Real3DGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCorridor, setActiveCorridor] = useState("all");
  const [isInteracting, setIsInteracting] = useState(false);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.3, y: -1.2 });

  const corridors: Corridor[] = [
    {
      id: "all",
      name: "Global Network Overview",
      region: "Cross-Border Trade",
      desc: "Coordinating end-to-end non-ferrous scrap flows from international sourcing yards to industrial smelters.",
      ports: "Global Maritime Routes",
      lat: 21.17,
      lon: 72.83, // Surat
    },
    {
      id: "middle-east",
      name: "Middle East Corridor",
      region: "Sourcing & Transit Hub",
      desc: "Frequent scrap aggregation, inspection verification, and containerized non-ferrous bulk shipments.",
      ports: "Jebel Ali • Dammam • Hamad",
      lat: 25.2,
      lon: 55.27,
    },
    {
      id: "southeast-asia",
      name: "Southeast Asia Route",
      region: "Industrial Smelting Gateway",
      desc: "Direct connection with extrusion manufacturers and secondary alloy remelting foundries.",
      ports: "Port Klang • Singapore • Haiphong",
      lat: 1.35,
      lon: 103.82,
    },
    {
      id: "europe",
      name: "European Trade Network",
      region: "Recycled Metal Sourcing",
      desc: "High-grade aluminium scrap sourcing compliant with international ISRI quality guidelines.",
      ports: "Rotterdam • Antwerp • Genoa",
      lat: 51.92,
      lon: 4.48,
    },
    {
      id: "east-asia",
      name: "East Asia Ports",
      region: "Extrusion Terminals",
      desc: "High-yield billet remelting and advanced secondary alloy casting channels.",
      ports: "Shanghai • Yokohama • Busan",
      lat: 31.23,
      lon: 121.47,
    },
  ];

  const current = corridors.find((c) => c.id === activeCorridor) || corridors[0];

  // Helper to convert Lat/Long to 3D Cartesian coordinates on sphere
  const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Globe Group (holds earth, clouds, pins, arcs)
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    // Initial orientation: Surat facing camera
    globeGroup.rotation.y = -1.2;
    globeGroup.rotation.x = 0.28;

    const globeRadius = 1.95;

    // Load Earth Texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      "/textures/earth-map.jpg",
      () => {
        renderer.render(scene, camera);
      }
    );
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    // Earth Sphere Mesh
    const earthGeo = new THREE.SphereGeometry(globeRadius, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.7,
      metalness: 0.15,
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // Glowing Atmosphere Halo Mesh
    const atmosphereGeo = new THREE.SphereGeometry(globeRadius * 1.025, 48, 48);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // Outer Glow Halo
    const outerHaloGeo = new THREE.SphereGeometry(globeRadius * 1.12, 32, 32);
    const outerHaloMat = new THREE.MeshBasicMaterial({
      color: 0x075ea8,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const outerHaloMesh = new THREE.Mesh(outerHaloGeo, outerHaloMat);
    scene.add(outerHaloMesh);

    // Surat Coordinates: 21.1702° N, 72.8311° E
    const suratLat = 21.1702;
    const suratLon = 72.8311;
    const suratPos = latLonToVector3(suratLat, suratLon, globeRadius);

    // Surat Marker: Vibrant Green Beacon
    const pinGeo = new THREE.SphereGeometry(0.045, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0x39b54a });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);
    pinMesh.position.copy(suratPos);
    globeGroup.add(pinMesh);

    // Pulse Ring around Surat
    const ringGeo = new THREE.RingGeometry(0.06, 0.09, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x4ed060,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.copy(suratPos.clone().multiplyScalar(1.01));
    ringMesh.lookAt(suratPos.clone().multiplyScalar(2));
    globeGroup.add(ringMesh);

    // Destination Ports & 3D Arcs
    const destinations = [
      { name: "Dubai", lat: 25.2, lon: 55.27, color: 0x39b54a },
      { name: "Singapore", lat: 1.35, lon: 103.82, color: 0x38bdf8 },
      { name: "Rotterdam", lat: 51.92, lon: 4.48, color: 0x39b54a },
      { name: "Shanghai", lat: 31.23, lon: 121.47, color: 0x38bdf8 },
      { name: "Busan", lat: 35.17, lon: 129.07, color: 0x38bdf8 },
      { name: "Antwerp", lat: 51.21, lon: 4.4, color: 0x39b54a },
      { name: "Dammam", lat: 26.42, lon: 50.1, color: 0x39b54a },
    ];

    // Create 3D Arcs connecting Surat to Global Destinations
    destinations.forEach((dest) => {
      const destPos = latLonToVector3(dest.lat, dest.lon, globeRadius);

      // Add small node marker at destination
      const destNodeGeo = new THREE.SphereGeometry(0.025, 12, 12);
      const destNodeMat = new THREE.MeshBasicMaterial({ color: dest.color });
      const destNodeMesh = new THREE.Mesh(destNodeGeo, destNodeMat);
      destNodeMesh.position.copy(destPos);
      globeGroup.add(destNodeMesh);

      // Arc calculation (Quadratic Bezier mid-point elevated above sphere)
      const distance = suratPos.distanceTo(destPos);
      const midPoint = new THREE.Vector3()
        .addVectors(suratPos, destPos)
        .multiplyScalar(0.5);

      // Elevation factor based on distance
      const elevation = globeRadius + distance * 0.35;
      midPoint.normalize().multiplyScalar(elevation);

      const curve = new THREE.QuadraticBezierCurve3(suratPos, midPoint, destPos);
      const points = curve.getPoints(50);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);

      const arcMat = new THREE.LineBasicMaterial({
        color: dest.color,
        transparent: true,
        opacity: 0.65,
        linewidth: 2,
      });

      const arcLine = new THREE.Line(arcGeo, arcMat);
      globeGroup.add(arcLine);
    });

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x075ea8, 1.5);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    // Interactive Drag to Rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !globeGroupRef.current) return;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      dragVelocity = { x: deltaX * 0.005, y: deltaY * 0.005 };

      globeGroupRef.current.rotation.y += dragVelocity.x;
      globeGroupRef.current.rotation.x += dragVelocity.y;

      // Clamp vertical tilt
      globeGroupRef.current.rotation.x = Math.max(
        -1.0,
        Math.min(1.0, globeGroupRef.current.rotation.x)
      );

      previousMousePosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setTimeout(() => setIsInteracting(false), 2000);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    domElement.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let pulseScale = 1;
    let pulseDirection = 1;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (globeGroupRef.current) {
        // Slow auto rotation when user is not dragging
        if (!isDragging) {
          globeGroupRef.current.rotation.y += 0.0018;
        }

        // Pulsing Surat marker ring
        pulseScale += 0.008 * pulseDirection;
        if (pulseScale > 1.35) pulseDirection = -1;
        if (pulseScale < 0.95) pulseDirection = 1;
        ringMesh.scale.set(pulseScale, pulseScale, pulseScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      domElement.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      domElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      earthTexture.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      outerHaloGeo.dispose();
      outerHaloMat.dispose();
    };
  }, []);

  // Rotate globe to face selected corridor
  const handleCorridorClick = (c: Corridor) => {
    setActiveCorridor(c.id);
    if (!globeGroupRef.current) return;

    // Calculate rotation Y to center target longitude
    const targetY = -((c.lon * Math.PI) / 180) + Math.PI / 2;
    const targetX = ((c.lat * Math.PI) / 180) * 0.5;

    // Smooth transition
    const startY = globeGroupRef.current.rotation.y;
    const startX = globeGroupRef.current.rotation.x;
    const startTime = performance.now();
    const duration = 1200;

    const animateRotation = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

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

  const handleReset = () => {
    const surat = corridors[0];
    handleCorridorClick(surat);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-gradient-to-b from-navy-900/90 via-navy-950 to-navy-900/90 backdrop-blur-md">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-[460px] sm:h-[560px] lg:h-[660px] cursor-grab active:cursor-grabbing relative"
      />

      {/* Top Floating Control Toolbar */}
      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none z-20">
        {/* Corridor Pills */}
        <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
          {corridors.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCorridorClick(c)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 backdrop-blur-md ${
                activeCorridor === c.id
                  ? "bg-brandGreen text-navy shadow-lg shadow-brandGreen/20 scale-105"
                  : "bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-white/10"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Reset / Origin Indicator */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 shadow"
            title="Recenter on Surat, Gujarat"
          >
            <RotateCcw className="w-3.5 h-3.5 text-brandGreen" />
            <span className="hidden sm:inline">Reset to Surat</span>
          </button>
        </div>
      </div>

      {/* Floating 3D Interaction Prompt on Top Right */}
      <div className="hidden sm:flex absolute bottom-24 right-6 pointer-events-none z-20">
        <div className="px-3 py-1.5 rounded-lg bg-navy-900/80 backdrop-blur-sm border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-brandGreen animate-spin" />
          <span>Click & Drag to Rotate 3D Earth</span>
        </div>
      </div>

      {/* Bottom Live Corridor Information Bar */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-navy-900/95 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-20">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brandBlue text-white">
              {current.region}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white">
              {current.name}
            </h4>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            {current.desc}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5 flex-shrink-0">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
              Gateway Terminals
            </div>
            <div className="text-xs font-semibold text-brandGreen mt-0.5">
              {current.ports}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-brandGreen" />
            <span>Active Non-Ferrous Routes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
