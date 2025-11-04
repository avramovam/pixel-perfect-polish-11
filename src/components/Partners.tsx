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

  const partners = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Партнер ${i + 1}`,
    image: `https://images.unsplash.com/photo-${1550000000000 + i * 100000}?q=80&w=200&h=100&fit=crop`
  }));

  return (
    <section id="partners" className="py-16 md:py-24 bg-gradient-to-br from-ice to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,32,104,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-ocean after:rounded-full">
            Заказчики и партнеры
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mt-8">
            Мы гордимся сотрудничеством с ведущими предприятиями различных отраслей промышленности
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-20">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex items-center justify-center min-h-[120px]"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl text-primary font-bold mb-2">•</div>
                <p className="text-xs md:text-sm text-gray-600">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary via-ocean to-primary p-1 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
              Станьте нашим партнером
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Мы открыты для сотрудничества с компаниями, заинтересованными в реализации инновационных проектов и решении сложных технических задач.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("contacts")}
              className="bg-gradient-to-r from-primary to-dark hover:from-dark hover:to-primary text-white px-6 md:px-8 py-5 md:py-6 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              Обсудить сотрудничество
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
