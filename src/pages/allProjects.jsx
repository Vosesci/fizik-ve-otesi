import { Link } from "react-router-dom";
import projectsData from "../assets/json/projects.json";
import Navbar from "../components/_Navbar";

export default function AllProjects() {
  return (
    <section>
      <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#EEF1FF]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Tüm Projeler
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link to={`/proje/${project.id}`}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-gray-900">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    to={`/proje/${project.id}`}
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Detayları Gör
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
