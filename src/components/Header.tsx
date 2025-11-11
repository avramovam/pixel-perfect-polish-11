import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoImg = "/images/лого-no-bg-preview (carve.photos).png";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "about", label: "О компании" },
    { id: "capabilities", label: "Поставка" },
    { id: "production", label: "Металлообработка" },
    { id: "experience", label: "Опыт" },
    { id: "partners", label: "Партнёры" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-40 border-b border-gray-100">
        <div className="container mx-auto py-2 sm:py-3 px-3 sm:px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              {<img src={logoImg} alt="Логотип ЧИП ЛОГИК ПЛЮС" loading="lazy" />}
            </div>
            <span className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-[#152863]">
              ЧИП&nbsp;ЛОГИК&nbsp;ПЛЮС
            </span>
          </div>
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-primary text-base xl:text-lg font-medium py-2 hover:text-ocean transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-ocean hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-50 p-6 shadow-2xl lg:hidden animate-in slide-in-from-left duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-primary">Меню</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-primary text-xl font-medium text-left hover:text-ocean transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};