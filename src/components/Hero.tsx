import { Phone, Lightbulb, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-dark via-primary to-ocean text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/8 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
            <span className="text-white block mb-2">Группа компаний</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-sky to-white bg-clip-text text-transparent">
              ЧИП ЛОГИК ПЛЮС
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            Инжинирингово-производственная компания. Работаем с 2012 года.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-16 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacts")}
              className="bg-gradient-to-r from-primary to-dark hover:from-dark hover:to-primary text-white px-6 md:px-8 py-5 md:py-6 rounded-xl text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("capabilities")}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 md:px-8 py-5 md:py-6 rounded-xl text-base md:text-lg font-semibold transition-all duration-500 w-full sm:w-auto"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Наши возможности
            </Button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center animate-bounce hover:bg-white/30 transition-colors cursor-pointer"
            >
              <ChevronDown className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
