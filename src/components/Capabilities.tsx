import { Check } from "lucide-react";
import componentsImage from "@/images/umberto-jXd2FSvcRr8-unsplash.jpg";
import passiveElementsImage from "@/images/anne-nygard-cA8VTQeHU0c-unsplash.jpg";

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
    <section id="capabilities" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary via-secondary to-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(25,118,210,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-sky after:to-white after:rounded-full px-2">
            Поставка
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto mt-6 sm:mt-8 px-2 leading-relaxed">
            Комплексный подход к&nbsp;поставкам электронных компонентов с&nbsp;гарантией качества
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-ocean">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 px-2">{step.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ocean rounded-full mt-1 sm:mt-2 mr-4 sm:mr-6 flex-shrink-0 flex items-center justify-center">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-rows-2 gap-4 sm:gap-6">
            <div className="relative h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
              <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-ocean to-transparent rounded-full opacity-20 blur-xl" />
              <img
                src={componentsImage}
                alt="Электронные компоненты"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="relative h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px]">
              <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-gradient-to-br from-primary to-transparent rounded-full opacity-20 blur-xl" />
              <img
                src={passiveElementsImage}
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
