import { Check } from "lucide-react";

export const Capabilities = () => {
  const steps = [
    {
      number: "1",
      title: "Широкий спектр компонентов",
      description: "ПЛИС, АЦП, ЦАП, процессоры, микроконтроллеры, память, ВЧ и СВЧ-комплектующие, соединители гражданского и двойного назначения."
    },
    {
      number: "2",
      title: "Подбор аналогов и импортозамещение",
      description: "Активное участие в государственной программе по импортозамещению, помощь в переходе на отечественную ЭКБ."
    },
    {
      number: "3",
      title: "Система менеджмента качества",
      description: "В компании внедрена система менеджмента качества для обеспечения контроля качества поставляемой электронно-компонентной базы."
    }
  ];

  const features = [
    {
      title: "Комплексная поставка",
      description: "Обеспечение потребителей ЭКБ требуемой категории качества, в заданные сроки и объемы."
    },
    {
      title: "Информационно-техническое сопровождение",
      description: "Полная поддержка на всех этапах сотрудничества, от подбора до внедрения."
    },
    {
      title: "100% Входной контроль",
      description: "Тщательная проверка компонентов при поступлении на склад, гарантирующая соответствие всем требованиям."
    },
    {
      title: "Сертификационные испытания",
      description: "Проведение проверок в аккредитованных лабораториях для подтверждения соответствия стандартам."
    }
  ];

  return (
    <section id="capabilities" className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(25,118,210,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-sky after:to-white after:rounded-full">
            Поставка
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mt-8">
            Комплексный подход к поставкам электронных компонентов с гарантией качества
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl md:text-3xl font-bold text-ocean">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-6 h-6 bg-ocean rounded-full mt-2 mr-6 flex-shrink-0 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="relative h-[200px] md:h-[300px]">
              <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-ocean to-transparent rounded-full opacity-20 blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
                alt="Электронные компоненты"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative h-[200px] md:h-[300px]">
              <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-primary to-transparent rounded-full opacity-20 blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200"
                alt="Пассивные элементы"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
