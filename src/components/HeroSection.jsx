import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion"; // Animasyon kontrolü için
import { useEffect } from "react"; // useEffect ekliyoruz
import HeroSectionBackground from "/images/hyundai/WRCHyundai.jpg";

export default function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  const controls = useAnimation(); // Animasyon kontrol hook'u

  // Sonsuz gradient animasyonu için
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          backgroundPosition: ["0% 50%", "100% 50%"],
          transition: { duration: 8, repeat: Infinity, repeatType: "reverse" },
        });
      }
    };
    sequence();
  }, [controls]);

  if (!title || !ctaText || !ctaLink) {
    return <div className="bg-red-100 p-4">Eksik prop değerleri</div>;
  }

  // Diğer animasyon tanımları...
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Arka Plan Resmi */}
      <motion.img
        src={HeroSectionBackground}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-1 brightness-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* İçerik Container */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Gradient Animasyonlu Başlık */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 leading-tight tracking-tight"
          initial={{
            backgroundSize: "200% 200%",
            backgroundImage:
              "linear-gradient(45deg, #ff5555, #3f42ff, #2dd4bf,#fff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          animate={controls}
          variants={item}
        >
          {title}
        </motion.h1>

        {/* Diğer içerikler aynı şekilde kalıyor... */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-white font-medium mt-6 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={item}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-8"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to={ctaLink}
            className="inline-block px-8 py-3 sm:px-10 sm:py-4 text-lg font-semibold rounded-md text-white bg-neutral-600/70 hover:bg-neutral-300 hover:text-neutral-950 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
};
