import React from "react";

const Projects = () => {
    return (
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
    );
};

export default Projects;