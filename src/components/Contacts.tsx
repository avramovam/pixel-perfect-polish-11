import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { toast } from "sonner";

export const Contacts = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Скопировано в буфер обмена");
    }).catch(() => {
      toast.error("Не удалось скопировать");
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес:",
      content: "197348, Россия, г. Санкт-Петербург, ул. Аэродромная, д. 8, лит. А",
      copyContent: "197348, Россия, г. Санкт-Петербург, ул. Аэродромная, д. 8, лит. А"
    },
    {
      icon: Mail,
      title: "E-mail:",
      content: "info@chiplogicplus.com",
      copyContent: "info@chiplogicplus.com",
      isLink: true,
      href: "mailto:info@chiplogicplus.com"
    },
    {
      icon: Phone,
      title: "Телефон:",
      content: "+7 (812) 334-12-18",
      copyContent: "+78123341218",
      isLink: true,
      href: "tel:+78123341218"
    },
    {
      icon: Globe,
      title: "Сайт:",
      content: "www.chiplogicplus.com",
      copyContent: "www.chiplogicplus.com"
    }
  ];

  return (
    <section id="contacts" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-ice to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,32,104,0.05),transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-heading mb-4 relative inline-block after:absolute after:bottom-[-15px] after:left-0 after:w-20 after:h-1 after:bg-gradient-to-r after:from-primary after:to-ocean after:rounded-full px-2">
            Контакты
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto mt-6 sm:mt-8 px-2 leading-relaxed">
            Свяжитесь с&nbsp;нами для обсуждения вашего проекта
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-2xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8">Реквизиты</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    onClick={() => copyToClipboard(info.copyContent)}
                    className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-ocean text-white rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-lg">
                      <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-primary text-sm sm:text-base md:text-lg mb-1">{info.title}</p>
                      {info.isLink ? (
                        <a
                          href={info.href}
                          className="text-xs sm:text-sm md:text-base text-gray-700 hover:text-ocean transition-colors break-words"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(info.copyContent);
                            e.preventDefault();
                          }}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 break-words leading-relaxed">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.293594%2C59.996842&mode=search&oid=1842002952&ol=biz&z=13.64"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title="Карта местоположения"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
