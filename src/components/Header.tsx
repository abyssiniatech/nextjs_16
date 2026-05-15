"use client";

import Links from "./Links";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white hover:text-red-400 transition-colors duration-300 cursor-pointer">
          My Website
        </h1>

        {/* Navigation */}
        <nav className="hidden md:block">
          <Links />
        </nav>

        {/* Mobile placeholder (optional later) */}
        <div className="md:hidden text-sm text-gray-300">
          Menu
        </div>
      </div>
    </header>
  );
}