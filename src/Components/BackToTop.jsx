import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    show && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-black p-3 rounded-full shadow-lg transition"
      >
        <ArrowUp size={22} />
      </button>
    )
  );
};

export default BackToTop;
