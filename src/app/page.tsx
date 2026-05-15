import React from "react";
import Link from "next/link";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-950 via-gray-900 to-black text-white">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Modern <span className="text-indigo-400">Web Applications</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          Learn, build, and deploy full-stack applications using Next.js, React,
          and Tailwind CSS. Start your journey to becoming a professional developer.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium shadow-lg"
          >
            Get Started
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-500 hover:border-white transition font-medium"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-indigo-300">Fast Performance</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Optimized apps with Next.js App Router and server components.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-indigo-300">Modern UI</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Beautiful interfaces built with Tailwind CSS utility-first design.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
          <h2 className="text-xl font-semibold text-indigo-300">Scalable Apps</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Build production-ready applications with best practices.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Homepage;