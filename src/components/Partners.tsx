import { Button } from "@/components/ui/button";

export const Partners = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const partners = [
    { id: 1, name: "Партнер 1", image: "src/images/парт1.png" },
    { id: 2, name: "Партнер 2", image: "src/images/парт2.jpg" },
    { id: 3, name: "Партнер 3", image: "src/images/парт3.jpg" },
    { id: 4, name: "Партнер 4", image: "src/images/парт4.png" },
    { id: 5, name: "Партнер 5", image: "src/images/парт5.jpg" },
    { id: 6, name: "Партнер 6", image: "src/images/парт6.png" },
    { id: 7, name: "Партнер 7", image: "src/images/парт7.png" },
    { id: 8, name: "Партнер 8", image: "src/images/парт8.jpg" }
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-ice to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,32,104,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-ocean after:rounded-full px-2">
            Заказчики и&nbsp;партнеры
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mt-6 sm:mt-8 px-2 leading-relaxed">
            Мы&nbsp;гордимся сотрудничеством с&nbsp;ведущими предприятиями различных отраслей промышленности
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center min-h-[100px] sm:min-h-[110px] md:min-h-[120px]"
            >
              {/* ВСТАВЬТЕ КАРТИНКУ ПАРТНЕРА ЗДЕСЬ */}
              <img
                src={partner.image}
                alt={partner.name}
                className="max-w-full max-h-12 sm:max-h-14 md:max-h-16 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary via-ocean to-primary p-[2px] rounded-3xl shadow-2xl">
          <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 px-2">
              Станьте нашим партнером
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-2">
              Мы&nbsp;открыты для сотрудничества с&nbsp;компаниями, заинтересованными в&nbsp;реализации инновационных проектов и&nbsp;решении сложных технических задач.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contacts")}
              className="bg-gradient-to-r from-primary to-dark hover:from-dark hover:to-primary text-white px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 whitespace-nowrap"
            >
              Обсудить сотрудничество
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};