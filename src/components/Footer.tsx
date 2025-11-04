import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Скопировано в буфер обмена");
    }).catch(() => {
      toast.error("Не удалось скопировать");
    });
  };

  const companyLinks = [
    { label: "О нас", id: "about" },
    { label: "Поставка", id: "capabilities" },
    { label: "Производство", id: "production" },
    { label: "Опыт", id: "experience" },
    { label: "Партнёры", id: "partners" }
  ];

  return (
    <footer className="bg-gradient-to-r from-dark to-primary text-white py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,118,210,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center mb-6">
              <span className="text-xl md:text-2xl font-bold">ЧИП ЛОГИК ПЛЮС</span>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Группа компаний «ЧИП ЛОГИК ПЛЮС» — профессиональные решения в области металлообработки, НИОКР, проектирования и поставок электронных компонентов.
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Компания</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left block py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Контакты</h3>
            <ul className="space-y-4 text-gray-300">
              <li
                className="flex items-start cursor-pointer hover:text-white transition-colors"
                onClick={() => copyToClipboard("197348, Россия, г. Санкт-Петербург, ул. Аэродромная, д. 8, лит. А")}
              >
                <MapPin className="h-6 w-6 mr-3 mt-1 text-ocean flex-shrink-0" />
                <span className="leading-relaxed">Санкт-Петербург, ул. Аэродромная, д. 8</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-ocean flex-shrink-0" />
                <a
                  href="mailto:info@chiplogicplus.com"
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard("info@chiplogicplus.com");
                  }}
                >
                  info@chiplogicplus.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-ocean flex-shrink-0" />
                <a
                  href="tel:+78123341218"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +7 (812) 334-12-18
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-gray-400 text-base md:text-lg">
            &copy; 2025 ЧИП ЛОГИК ПЛЮС. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
