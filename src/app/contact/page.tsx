import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-700 flex items-center justify-center px-6">
      
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE INFO */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch 
          </h1>

          <p className="text-gray-200 mb-6">
            Feel free to reach out for collaboration, job opportunities, or just
            to say hello. I’m always open to discussing new projects and ideas.
          </p>

          <div className="space-y-3 text-gray-300">
            <p> Addis Ababa, Ethiopia</p>
            <p> surafel@example.com</p>
            <p> Available for freelance & full-time roles</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
          
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Form
          </h2>

          <form className="space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message..."
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-indigo-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Send Message 
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;