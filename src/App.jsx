import Hero from "./Sections/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Sections/Services"; 
import Features from "./Sections/Features";
import Footer from "./Components/Footer";
import CTA from "./Sections/CTA";
import Contact from "./Sections/Contact";
import ScrollProgress from "./Components/ScrollProgress";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <>
      <ScrollProgress/>
      <Navbar/> 
      <Hero/>
      <Services/> 
      <Features/> 
      <CTA/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>
  );
}

export default App;
