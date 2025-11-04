import { Search, PenTool, CheckCircle, Zap } from "lucide-react";

export const Experience = () => {
  const niokrSteps = [
    {
      icon: Search,
      title: "Исследование",
      description: "Анализ требований, изучение аналогов, разработка ТЗ"
    },
    {
      icon: PenTool,
      title: "Проектирование",
      description: "Разработка КД, 3D-моделирование, инженерные расчеты"
    },
    {
      icon: CheckCircle,
      title: "Тестирование",
      description: "Изготовление прототипов, лабораторные и натурные испытания"
    },
    {
      icon: Zap,
      title: "Внедрение",
      description: "Подготовка производства, обучение персонала, техподдержка"
    }
  ];

  const projects = [
    {
      title: "Медицина и безопасность",
      items: [
        "Имплантируемый управляемый нейро-стимулятор для «умных» протезов",
        "Комплексная досмотровая система реального времени «Портал» и др."
      ]
    },
    {
      title: "Коммуникации",
      items: [
        "Защищённые низкоэнергетические станции связи на основе SDR-платформы",
        "Модули связи mesh Monet с защищённым интерфейсом",
        "Системы анализа трафика для купирования угроз ИБ и др."
      ]
    },
    {
      title: "Радиолокация и антенны",
      items: [
        "Цифровая мультисервисная платформа для станций спутниковой связи",
        "Формирователь сигналов для РЛК и мощный СВЧ усилитель АР",
        "Радиочастотное оборудование — усилители, конверторы и др."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-dark via-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(25,118,210,0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-sky after:to-white after:rounded-full">
            Наш опыт
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mt-8">
            Решение сложных задач в различных критически важных областях
          </p>
        </div>

        {/* НИОКР Section */}
        <div className="bg-gradient-to-r from-primary to-ocean p-1 rounded-3xl shadow-2xl mb-12 md:mb-20">
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Научно-исследовательские и опытно-конструкторские работы
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {niokrSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 hover:bg-gray-100 transition-all duration-500 rounded-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-ocean text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-primary mb-3">{step.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-ocean">{project.title}</h3>
              <ul className="space-y-4 text-gray-200">
                {project.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 text-ocean mt-1 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
