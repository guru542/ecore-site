import { Cpu, Users, HeartHandshake, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Cutting-Edge Technology",
    desc: "We use the latest tools and frameworks to build future-proof solutions.",
    icon: Cpu,
  },
  {
    title: "Expert Team",
    desc: "Our experienced developers and engineers deliver high-quality products.",
    icon: Users,
  },
  {
    title: "Client-Focused Approach",
    desc: "We work closely with clients to ensure solutions match their business goals.",
    icon: HeartHandshake,
  },
  {
    title: "Scalable Architecture",
    desc: "Our systems are built to grow with your business without performance loss.",
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-4">Why Choose Us</h3>
        <p className="text-gray-600 text-lg">
          We combine innovation, expertise, and dedication to deliver exceptional digital solutions.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {features.map((feature, index) => {
  const Icon = feature.icon;
  return (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
    >
      <div className="text-blue-600 mb-4">
        <Icon size={36} />
      </div>
      <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
      <p className="text-gray-600">{feature.desc}</p>
    </div>
  );
})}

      </div>
    </section>
  );
};

export default Features;
