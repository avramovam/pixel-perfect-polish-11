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
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 bg-gradient-to-br from-dark via-primary to-ocean text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/8 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-4 sm:mb-6 leading-tight">
            <span className="text-white block mb-2">Группа компаний</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0395ee]">
              ЧИП ЛОГИК ПЛЮС
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90 px-2">
            Инжинирингово-производственная компания. Работаем с&nbsp;2012&nbsp;года.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-14 md:mb-16 px-2">
            <Button
              size="lg"
              onClick={() => scrollToSection("contacts")}
              className="bg-gradient-to-r from-primary to-dark hover:from-dark hover:to-primary text-white px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-xl text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 w-full sm:w-auto whitespace-nowrap min-h-[60px] sm:min-h-[70px]"
            >
              <Phone className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Связаться с&nbsp;нами
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("capabilities")}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-xl text-base sm:text-lg md:text-xl font-semibold transition-all duration-500 w-full sm:w-auto whitespace-nowrap min-h-[60px] sm:min-h-[70px] hover:scale-105"
            >
              <Lightbulb className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Наши возможности
            </Button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center animate-bounce hover:bg-white/30 transition-colors cursor-pointer"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};