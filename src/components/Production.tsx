import chesterImg from "@/images/chester-oates-gHY2Upbsjek-unsplash.jpg";
import hansImg from "@/images/hans-westbeek-fimoFLchbuk-unsplash.jpg";
import cemrecanImg from "@/images/cemrecan-yurtman-qk2i7n39-B0-unsplash.jpg";
import rizkyImg from "@/images/rizky-nuriman-Ws8SCmDS9mw-unsplash.jpg";

export const Production = () => {
  const services = [
    {
      title: "Металлообработка",
      description: "Фрезерные и токарные станки с ЧПУ, карусельные работы",
      image: chesterImg
    },
    {
      title: "Штамповка",
      description: "Холодная и горячая штамповка, гидравлические прессы",
      image: hansImg
    },
    {
      title: "Лазерная резка",
      description: "Лазерные станки 4КВт, электроэрозионная обработка",
      image: cemrecanImg
    },
    {
      title: "Сварка",
      description: "Сварка нержавеющей стали и титана, аттестованные специалисты",
      image: rizkyImg
    }
  ];

  return (
    <section id="production" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-ice to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,32,104,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-ocean after:rounded-full px-2">
            Металлообработка
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mt-6 sm:mt-8 px-2 leading-relaxed">
            Современное оборудование для выполнения полного цикла работ
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
