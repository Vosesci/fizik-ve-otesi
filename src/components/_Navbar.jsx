import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);

    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-1000 ${
        isTop ? "bg-neutral-950 py-2" : "bg-neutral-100 shadow-md"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Scroll'a göre renk değişimi */}
          <Link
            to="/"
            className={`text-4xl font-bold tracking-widest ${
              isTop ? "text-white " : "text-black"
            }`}
          >
            FİZİK VE ÖTESİ
          </Link>

          {/* Hamburger Buton */}
          <button
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Mobile Menu"
          >
            <span
              className={`block absolute h-0.5 w-full ${
                isTop ? "bg-white" : "bg-gray-800"
              } transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full ${
                isTop ? "bg-white" : "bg-gray-800"
              } mt-2 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-full ${
                isTop ? "bg-white" : "bg-gray-800"
              } mt-4 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>

          {/* Masaüstü Menü */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-2xl hover:text-neutral-500 transition-colors ${
                isTop ? "text-white" : "text-gray-800"
              }`}
            >
              Anasayfa
            </Link>
            <Link
              to="/tum-projeler"
              className={`text-2xl hover:text-neutral-500 transition-colors ${
                isTop ? "text-white" : "text-gray-800"
              }`}
            >
              Projeler
            </Link>
            <Link
              to="/iletisim"
              className={`text-2xl hover:text-neutral-500 transition-colors ${
                isTop ? "text-white" : "text-gray-800"
              }`}
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
