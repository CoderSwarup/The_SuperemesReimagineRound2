import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SuperProduct from "./Components/SuperProduct/SuperProduct";
import OurPartners from "./Components/OurPartners/OurPartners";
import OurFeatures from "./Components/OurFeatures/OurFeatures";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export let container = null;

function App() {
  container = useRef();

  useGSAP(() => {}, { scope: container });
  return (
    <div id="main" ref={container}>
      <OurPartners />
      <OurFeatures />
      <SuperProduct />
    </div>
  );
}

export default App;
