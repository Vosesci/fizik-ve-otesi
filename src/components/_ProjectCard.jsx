import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const _ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Proje Görseli */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-gray-800 hover:bg-blue-100 transition-colors"
                title="Canlı Demo"
              >
                <FiExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full text-gray-800 hover:bg-blue-100 transition-colors"
                title="GitHub Repo"
              >
                <FiGithub size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Proje İçeriği */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <FiCalendar className="mr-1" />
          <span>{new Date(project.date).toLocaleDateString("tr-TR")}</span>
        </div>

        {/* Teknoloji Etiketleri */}
        <div className="flex flex-wrap gap-2">
          {project.details.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.details.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              +{project.details.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default _ProjectCard;
