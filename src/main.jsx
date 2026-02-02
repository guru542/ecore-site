import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // only animate once
    });
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
