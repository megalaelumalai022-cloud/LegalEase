import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ href = "/", size = "md", showText = true }: LogoProps) {
  const imgSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href={href} className="inline-flex items-center gap-3 font-bold tracking-tight text-slate-900 dark:text-white group">
      <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/80 bg-white p-1 shadow-sm transition-transform duration-200 group-hover:scale-105 dark:border-slate-800 dark:bg-slate-900">
        <Image
          src="/logo.png"
          alt="LegalEase Logo"
          width={imgSizes[size]}
          height={imgSizes[size]}
          className="object-contain rounded-lg"
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-tight ${textSizes[size]}`}>
            Legal<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ease</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1 hidden sm:block">
            AI Legal Tech
          </span>
        </div>
      )}
    </Link>
  );
}
