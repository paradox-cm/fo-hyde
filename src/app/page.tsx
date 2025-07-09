"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black text-white font-mono">
      <Image
        src="/HYDE.svg"
        alt="HYDE Camouflage Logo"
        width={180}
        height={180}
        priority
        className="mb-6 w-32 h-32 sm:w-44 sm:h-44"
      />
      <a
        href="mailto:admin@hydecamouflage.com"
        className="text-lg sm:text-xl font-mono text-white text-center underline hover:text-white focus:text-white active:text-white transition-colors"
      >
        admin@hydecamouflage.com
      </a>
    </div>
  );
}
