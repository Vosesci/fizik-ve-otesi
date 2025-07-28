import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = "service_qt84kcb";
  const PUBLIC_KEY = "tb_LsYcID5oNe4P4Y";
  const TEMPLATE_ID = "template_40zo7n6";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Mesaj Gönderildi!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Mesaj Gönderilemedi! Tekrar Deneyiniz!");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#EEF1FF]">
      {" "}
      {/* Arkaplan rengi eklendi */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#ff5555] to-[#3f42ff] bg-clip-text text-transparent">
          İletişime Geç!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-neutral-200/40 p-10 rounded-xl shadow-xl" /* Form kartı */
        >
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Adınız"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ornek@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Mesajınızı yazınız..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#3f42ff] to-[#B1B2FF] text-white py-3 px-6 rounded-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block mr-2"
                  >
                    🔄
                  </motion.span>
                  Gönderiliyor...
                </span>
              ) : (
                "Gönder"
              )}
            </motion.button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
