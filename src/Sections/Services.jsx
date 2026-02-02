import { Globe, Smartphone, Cloud, Divide } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "Modern, fast and scalable websites built with the latest technologies.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for Android and iOS devices.",
    icon: Smartphone,
  },
  {
    title: "Cloud Solutions",
    desc: "Secure and scalable cloud infrastructure for your growing business.",
    icon: Cloud,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h3 className="text-4xl font-bold mb-4">Our Services</h3>
        <p className="text-gray-600 text-lg">
          We provide powerful digital solutions to help your business grow.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto" data-aos="fade-up">
        {services.map((service, index) => {
  const Icon = service.icon;
  return (
    <div
      key={index}
      data-aos="zoom-in"
      data-aos-delay={index * 200}
      className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
    >
      <div className="flex justify-center mb-4 text-blue-600">
        <Icon size={40} />
      </div>
      <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
      <p className="text-gray-600">{service.desc}</p>
    </div>
  );
})}

      </div>
    </section>
  );
};

export default Services;
