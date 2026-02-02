import{motion} from "framer-motion";
import guru from "../assets/guru.jpeg"

const Hero = () =>{
  return(
  <motion.section
  id="home"
  className="pt-28 min-h-screen flex items-center justify-center px-6 bg-black text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE — TEXT */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Advanced Tech <span className="text-cyan-400">Solutions</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-gray-400 text-lg"
      >
        We design and develop powerful digital products that drive innovation and growth.
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        href="#contact"
        className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Let’s Work Together
      </motion.a>
    </div>

    {/* RIGHT SIDE — IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="flex justify-center"
    >
      <img
        src={guru}
        alt="Tech Illustration"
        className="w-full max-w-md md:max-w-lg drop-shadow-[0_0_40px_rgba(0,255,255,0.2)]"
      />
    </motion.div>

  </div>
</motion.section>
  );
}


export default Hero;
