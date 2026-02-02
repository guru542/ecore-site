import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      // Shadow on scroll
      setScrolled(window.scrollY > 20);

      // Active link detection
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    `cursor-pointer transition ${
      active === section
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
            E
          </div>
          <span className="text-xl font-semibold text-gray-800">
            E Core Systems
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#portfolio" className={linkClass("portfolio")}>Portfolio</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#team" className={linkClass("team")}>Team</a>
          <a href="#testimonials" className={linkClass("testimonials")}>Testimonials</a>
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}
