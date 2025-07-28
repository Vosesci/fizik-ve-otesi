import { Link } from "react-router-dom";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : " h-0 opacity-0 pointer-events-none"
            }`}
      >
        <button
          onClick={() => setMenuOpen(false)} // setMenuOpen prop'unu kullan
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
        {/* Link bileşenlerini kullanarak React Router ile uyumlu hale getiriyoruz */}
        <Link
          to="/" // Anasayfa rotasına yönlendir
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          ANASAYFA
        </Link>
        {/* "HAKKIMDA" için doğrudan bir rota olmadığı için şimdilik Anasayfa'ya yönlendiriyoruz.
            Eğer ayrı bir "Hakkımda" sayfanız varsa, burayı "/hakkimda" olarak değiştirebilirsiniz. */}
        <Link
          to="/" // Hakkımda için Anasayfa rotasına yönlendir
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          HAKKIMDA
        </Link>
        <Link
          to="/tum-projeler" // Projeler rotasına yönlendir
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          PROJELER
        </Link>
        <Link
          to="/iletisim" // İletişim rotasına yönlendir
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
          İLETİŞİM
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
