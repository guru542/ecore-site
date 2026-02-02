const CTA = () => {
  return (
    <section
      id="cta"
      className="py-24 px-6 bg-blue-600 text-white text-center relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business with Technology?
        </h3>

        <p className="text-lg md:text-xl mb-10 text-blue-100">
          Let’s build powerful digital solutions that drive growth and innovation.
        </p>

        <a
          href="#contact"
          className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition"
        >
          Contact Us Today
        </a>
      </div>

      {/* Decorative background glow */}
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20"></div>
    </section>
  );
};

export default CTA;
