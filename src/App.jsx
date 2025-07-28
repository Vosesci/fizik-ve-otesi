import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Loadingscreen from "./components/LoadingScreen.jsx";
import Home from "./pages/Home";
import AllProjects from "./pages/allProjects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Navbar from "./components/_Navbar.jsx";
import MobileMenu from "./components/MobileMenu.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Kullanıcının App.jsx'indeki basename'i ekledik
    <Router basename="/fizik-ve-otesi">
      {/* {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />} */}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[#EEF1FF] text-gray-800`}
      >
        {/* Navbar ve MobileMenu bileşenlerini render ediyoruz ve state'i prop olarak iletiyoruz */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Ana içerik alanı */}
        <main className="pt-16 min-h-screen">
          {" "}
          {/* pt-16 Navbar'ın yüksekliğine göre ayarlandı */}
          {/* ErrorBoundary'yi Routes'ı sarmalayacak şekilde taşıdık */}
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Contact />
                    {/* Footer'ı burada bırakabiliriz veya Layout bileşenine taşıyabiliriz */}
                  </>
                }
              />
              <Route path="/tum-projeler" element={<AllProjects />} />
              <Route path="/proje/:id" element={<ProjectDetail />} />
              <Route path="/iletisim" element={<Contact />} />
            </Routes>
          </ErrorBoundary>
        </main>
        {/* Footer'ı Routes dışında, uygulamanın en altında render ediyoruz */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
