import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({
  variant = "dark",
  className = "",
  showSubtitle = true,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none select-none ${className}`}
    >
      {/* Official 3D Emblem Uploaded by User */}
      <div className="relative w-9 h-8 sm:w-11 sm:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo/yeoman-emblem.png"
          alt="Yeoman Exim Emblem"
          fill
          priority
          sizes="48px"
          className="object-contain drop-shadow-md"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-extrabold text-lg sm:text-xl leading-none">
          <span className={isLight ? "text-white" : "text-navy"}>
            YEOMAN
          </span>
          <span className="text-brandGreen ml-1.5 font-black">
            EXIM
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.26em] uppercase mt-1 leading-none ${
              isLight ? "text-slate-300/90" : "text-slate-500"
            }`}
          >
            Private Limited
          </span>
        )}
      </div>
    </Link>
  );
}
