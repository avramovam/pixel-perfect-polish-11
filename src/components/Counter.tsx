export const Counter = () => {
  const stats = [
    { number: "12 лет", label: "на рынке" },
    { number: "100+", label: "Реализованных проектов" },
    { number: "5", label: "Производственных цехов" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-ice to-sky relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(25,118,210,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-ocean after:rounded-full">
            Наши достижения
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-dark uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
