import { useEffect, useState } from "react";
import { Linkedin, Github, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
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
    `transition ${
      active === section
        ? "text-blue-400 font-semibold"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <footer className="bg-linear-to-b from-[#0B1220] to-[#070C18] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">
              E
            </div>
            <h2 className="text-lg font-semibold">E Core Systems</h2>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Transforming businesses through innovative technology solutions.
            Your trusted partner in digital transformation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-blue-500 transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/itz_me_dharsha_19?igsh=NGhhajZ0YTJpcjVk" className="hover:text-pink-500 transition"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className={linkClass("home")}>Home</a></li>
            <li><a href="#services" className={linkClass("services")}>Services</a></li>
            <li><a href="#portfolio" className={linkClass("portfolio")}>Portfolio</a></li>
            <li><a href="#about" className={linkClass("about")}>About</a></li>
            <li><a href="#team" className={linkClass("team")}>Team</a></li>
            <li><a href="#testimonials" className={linkClass("testimonials")}>Testimonials</a></li>
            <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>Cybersecurity</li>
            <li>AI & ML</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest updates on technology trends and our services.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-md text-sm font-semibold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} E Core Systems. All rights reserved.
      </div>
    </footer>
  );
}
