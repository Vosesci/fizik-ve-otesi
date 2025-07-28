import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo ve Açıklama */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <p className="text-gray-400">
              Şirketiniz hakkında kısa bir açıklama. Ürün ve hizmetlerinizin öne
              çıkan özellikleri.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-neutral-500 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neutral-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neutral-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-neutral-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neutral-500 transition-colors"
                >
                  Anasayfa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neutral-500 transition-colors"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neutral-500 transition-colors"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neutral-500 transition-colors"
                >
                  Ürünler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-neutral-500 transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>1234 Cadde No:56, Şehir, Ülke</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+90 555 123 45 67</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@sirketiniz.com</span>
              </li>
            </ul>
          </div>

          {/* Bülten Aboneliği */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bülten Aboneliği</h3>
            <p className="text-gray-400 mb-4">
              Güncellemeler ve promosyonlar için e-posta listemize kaydolun.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="border rounded-2xl px-4 py-2 w-full focus:outline-none text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-2xl transition-colors">
                Gönder
              </button>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Fizik ve Ötesi Topluluğu Tüm hakları
            saklıdır.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-neutral-500 text-sm transition-colors"
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-neutral-500 text-sm transition-colors"
            >
              Kullanım Şartları
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-neutral-500 text-sm transition-colors"
            >
              Çerez Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
