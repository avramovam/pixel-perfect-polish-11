import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import logoImage from "../images/лого-no-bg-preview (carve.photos).png";

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
    { label: "Металлообработка", id: "production" },
    { label: "Опыт", id: "experience" },
    { label: "Партнёры", id: "partners" }
  ];

  return (
    <footer className="bg-gradient-to-r from-dark to-primary text-white py-10 sm:py-12 md:py-14 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,118,210,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br flex items-center justify-center flex-shrink-0">
                <img src={logoImage} alt="Логотип ЧИП ЛОГИК ПЛЮС" loading="lazy" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">ЧИП&nbsp;ЛОГИК&nbsp;ПЛЮС</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              Группа компаний «ЧИП ЛОГИК ПЛЮС» — профессиональные решения в&nbsp;области металлообработки, НИОКР, проектирования и&nbsp;поставок электронных компонентов.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Компания</h3>
            <ul className="space-y-2 sm:space-y-3 flex-1">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm sm:text-base text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-left block py-1 sm:py-2 w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Контакты</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-300 flex-1">
              <li
                className="flex items-start cursor-pointer hover:text-white transition-colors"
                onClick={() => copyToClipboard("197348, Россия, г. Санкт-Петербург, ул. Аэродромная, д. 8, лит. А")}
              >
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 mt-0.5 text-ocean flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base leading-relaxed flex-1">Санкт-Петербург, ул.&nbsp;Аэродромная, д.&nbsp;8</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 mt-0.5 text-ocean flex-shrink-0" />
                <a
                  href="mailto:info@chiplogicplus.com"
                  className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-white transition-colors cursor-pointer break-all flex-1"
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard("info@chiplogicplus.com");
                  }}
                >
                  info@chiplogicplus.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 mt-0.5 text-ocean flex-shrink-0" />
                <a
                  href="tel:+78123341218"
                  className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap flex-1"
                >
                  +7&nbsp;(812)&nbsp;334-12-18
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg px-2">
            &copy; 2025 ЧИП&nbsp;ЛОГИК&nbsp;ПЛЮС. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};