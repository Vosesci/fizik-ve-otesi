import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import slideImages from "../assets/json/caraousel.json";
import { ChevronLeft, ChevronRight } from "react-feather";

const Caraousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayDelay = 7000; // 5 saniyede bir geçiş

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slideImages.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + slideImages.length) % slideImages.length
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Otomatik geçiş efekti
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDelay);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
      scale: 0.8,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      x: "0",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      x: direction === 1 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="flex items-center justify-center relative w-full h-screen overflow-hidden bg-white">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute w-[80%] h-[80%]"
            custom={direction}
            variants={slideVariants}
            initial={direction === 1 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
          >
            <img
              src={slideImages[currentIndex]["img-src"]}
              alt={slideImages[currentIndex]["img-title"]}
              className="w-full h-full object-cover rounded-[12px]"
            />
            <div className="shadow-lg absolute bottom-0 left-0 right-0 bg-white  text-black p-4 rounded-b-[12px]">
              <h3 className="text-xl font-bold mb-5">
                {slideImages[currentIndex]["img-title"]}
              </h3>
              <p>{slideImages[currentIndex]["img-desc"]}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slayt indikatörleri */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-10">
          {slideImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-gray-500"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Navigasyon okları */}
        <button
          className="absolute left-4 text-white p-2 bg-black bg-opacity-50 rounded-full z-10 hover:bg-opacity-70 transition-all duration-300"
          onClick={handlePrev}
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="absolute right-4 text-white p-2 bg-black bg-opacity-50 rounded-full z-10 hover:bg-opacity-70 transition-all duration-300"
          onClick={handleNext}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};
export default Caraousel;
