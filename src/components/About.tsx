import { Building2, Lightbulb, PenTool, Search } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Металлообработка",
      description: "Полный цикл работ по обработке металлов: токарные, фрезерные, шлифовальные операции, лазерная резка и гравировка."
    },
    {
      icon: Lightbulb,
      title: "НИОКР",
      description: "Научно-исследовательские и опытно-конструкторские работы по разработке новых изделий и технологий."
    },
    {
      icon: PenTool,
      title: "Проектирование",
      description: "Разработка конструкторской документации, 3D-моделирование, инженерные расчеты и техническое сопровождение."
    },
    {
      icon: Search,
      title: "Поставки",
      description: "Комплексные поставки электронных компонентов, включая подбор аналогов, входной контроль и сертификационные испытания."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-ice to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,32,104,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-ocean after:rounded-full">
            О компании
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Многолетний опыт в ключевых направлениях
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-dark rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-ocean to-primary rounded-full opacity-20 blur-xl" />
            <div className="h-[400px] md:h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200"
                alt="О компании ЧИП ЛОГИК ПЛЮС"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
