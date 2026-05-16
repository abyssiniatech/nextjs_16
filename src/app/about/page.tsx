   "use client"

import React from "react";
import { useRouter } from "next/navigation";
const AboutPage = () => {
  const route=useRouter();

  const chngepage=()=>{
     route.push('/')
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-700 flex items-center justify-center px-6">
   
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-white">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About Me
        </h1>

        <p className="text-center text-gray-200 mb-10 text-lg">
          I am a passionate full-stack developer focused on building modern,
          scalable, and beautiful web applications using Next.js, React, and
          Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2"> My Mission</h2>
            <p className="text-gray-200 text-sm">
              To create impactful digital solutions that solve real-world
              problems and improve user experience through clean design and
              efficient code.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2"> What I Do</h2>
            <p className="text-gray-200 text-sm">
              I build full-stack web applications, APIs, dashboards, and
              responsive UI systems using modern technologies like Next.js,
              Node.js, and TypeScript.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2"> Goals</h2>
            <p className="text-gray-200 text-sm">
              To become a world-class software engineer, contribute to open
              source, and secure a fully funded MSc scholarship abroad.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/10 hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2"> Tech Stack</h2>
            <p className="text-gray-200 text-sm">
              React, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind
              CSS, Git & GitHub.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Contact Me
          </button>
            <button onClick={chngepage} className="bg-white mx-4 text-indigo-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">Go to home page</button>
        </div>

        
      </div>
    
      
    </div>
  );
};

export default AboutPage;