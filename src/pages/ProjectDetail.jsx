import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiCalendar, FiUser, FiExternalLink } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projectsData from "../assets/json/projects.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = projectsData.find((p) => p.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="container mx-auto py-20 text-center">
        Proje bulunamadı
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link
          to="/projeler"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaChevronLeft className="mr-2" /> Tüm Projelere Dön
        </Link>

        {/* Proje Başlık ve Meta Bilgileri */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>{new Date(project.date).toLocaleDateString("tr-TR")}</span>
            </div>
            <div className="flex items-center">
              <FiUser className="mr-2" />
              <span>{project.client}</span>
            </div>
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                <FiExternalLink className="mr-2" />
                Canlı Demo
              </a>
            )}
          </div>
        </div>

        {/* Proje Görselleri */}
        <div className="relative mb-12 rounded-xl overflow-hidden bg-gray-200 h-screen">
          {project.images.length > 0 && (
            <>
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}. görsel`}
                className="w-full h-full object-cover"
              />

              {/* Slider Kontrolleri */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          currentImageIndex === index
                            ? "bg-white"
                            : "bg-white bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Proje İçeriği */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Proje Hakkında
            </h2>
            <p className="text-gray-700 mb-6 whitespace-pre-line">
              {project.description}
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Zorluklar
                </h3>
                <p className="text-gray-700">{project.details.challenges}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Çözümler
                </h3>
                <p className="text-gray-700">{project.details.solutions}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Teknolojiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.testimonial && (
              <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Müşteri Görüşü
                </h3>
                <blockquote className="text-gray-700 italic mb-4">
                  "{project.testimonial.text}"
                </blockquote>
                <div className="text-gray-900 font-medium">
                  <p>{project.testimonial.author}</p>
                  <p className="text-gray-600 text-sm">
                    {project.testimonial.position}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
