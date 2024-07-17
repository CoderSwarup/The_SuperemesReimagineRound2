import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SuperProduct from "./Components/SuperProduct/SuperProduct";
import OurPartners from "./Components/OurPartners/OurPartners";
import OurFeatures from "./Components/OurFeatures/OurFeatures";
import BestSellers from "./Components/BestSellers/BestSellers";

gsap.registerPlugin(ScrollTrigger);

export let container = null;

function App() {
  container = useRef();
  let mouseX = 0,
    mouseY = 0;

  useGSAP(
    () => {
      const cursor = document.querySelector(".cursor");
      const cursorScale = document.querySelectorAll(".cursor-scale");

      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });

      cursorScale.forEach((link) => {
        link.addEventListener("mouseleave", () => {
          cursor.classList.remove("grow");
          cursor.classList.remove("grow-small");
        });
        link.addEventListener("mousemove", () => {
          cursor.classList.add("grow");
          if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
          }
        });
      });

      return () => {
        cursorScale.forEach((link) => {
          link.removeEventListener("mouseleave", () => {});
          link.removeEventListener("mousemove", () => {});
        });
      };
    },
    { scope: container }
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="main" ref={container}>
      <div className="cursor"></div>
      <BestSellers />
      <OurPartners />
      <OurFeatures />
      <SuperProduct />
    </div>
  );
}

export default App;
