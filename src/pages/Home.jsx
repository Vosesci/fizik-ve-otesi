import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/_ProjectCard";
import projectsData from "../assets/json/projects.json";
import LoadingSpinner from "../components/LoadingSpinner";
import Caraousel from "../components/Caraousel";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Simüle edilmiş veri yükleme
    const timer = setTimeout(() => {
      const featured = projectsData.slice(0, 3); // İlk 3 projeyi öne çıkarılmış olarak al
      setFeaturedProjects(featured);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-[#EEF1FF]">
      {/* Hero Bölümü */}

      <HeroSection
        title="Fizik ve Ötesi"
        subtitle="Bilimin sınırlarını keşfedin"
        ctaText="Projeleri Keşfet"
        ctaLink="tum-projeler"
      />
      {/* Caraousel Bölümü */}
      <Caraousel />

      {/* Öne Çıkan Projeler */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Öne Çıkan Projeler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Son çalışmalarımızdan bir seçki
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="tum-projeler"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Tüm Projeleri Gör
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Hakkımızda Bölümü */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fizik ve Ötesi Hakkında
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bilimsel araştırmaları ve teknolojik yenilikleri bir araya getiren
              bir platform olarak, fizik alanındaki en son gelişmeleri sizlerle
              buluşturuyoruz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
