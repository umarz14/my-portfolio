import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-green-700 text-green-100 py-4 shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="space-x-6">
            <a href="#hero" className="hover:text-green-300">Home</a>
            <a href="#about" className="hover:text-green-300">About</a>
            <a href="#projects" className="hover:text-green-300">Projects</a>
            <a href="#contact" className="hover:text-green-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-green-900 text-green-100 pt-20">
        <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
        <p className="text-2xl mt-4">Aspiring Software Engineer | Full Stack Developer</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-green-100 text-center">
        <h2 className="text-4xl font-semibold text-green-900">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto text-green-800">
          I'm a passionate developer with experience in creating web applications using modern technologies.
          I enjoy solving complex problems and creating user-friendly, visually appealing applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-green-50 text-center">
        <h2 className="text-4xl font-semibold text-green-900">Projects</h2>
        <div className="grid gap-8 mt-8">
          <div className="p-4 shadow-md bg-white rounded-md">
            <h3 className="text-2xl text-green-800">Coffee Realm</h3>
            <p className="text-green-700">A coffee shop finder app utilizing Google Maps API and Angular.</p>
            <a href="#" target="_blank" className="text-green-600 underline">View Project</a>
          </div>
          <div className="p-4 shadow-md bg-white rounded-md">
            <h3 className="text-2xl text-green-800">To-Do App</h3>
            <p className="text-green-700">A simple task management tool built with React and Firebase.</p>
            <a href="#" target="_blank" className="text-green-600 underline">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-900 text-green-100 text-center">
        <h2 className="text-4xl font-semibold">Contact Me</h2>
        <form className="flex flex-col items-center mt-8">
          <input type="text" placeholder="Your Name" className="mb-4 p-2 w-80 rounded bg-green-100 text-green-900" />
          <input type="email" placeholder="Your Email" className="mb-4 p-2 w-80 rounded bg-green-100 text-green-900" />
          <textarea placeholder="Your Message" className="mb-4 p-2 w-80 rounded h-24 bg-green-100 text-green-900"></textarea>
          <button type="submit" className="bg-green-100 text-green-900 px-4 py-2 rounded">Send</button>
        </form>
      </section>
    </div>
  );
}




