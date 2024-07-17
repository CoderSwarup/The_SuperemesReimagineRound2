import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.globe.min";
import "./OurFeatures.css";
import { container } from "../../App";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function OurFeatures() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xd4841d,
          color2: 0x43ff41,
          backgroundColor: 0x0,
          opacity: 0.4,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useGSAP(
    () => {
      if (container !== null) {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#Our-Features",
            start: "50% 50%",
            end: "200% 50%",
            pin: true,
            // markers: true,
            scrub: 1,
          },
        });

        timeline.to(
          ".feature-one",
          {
            marginTop: "-25%",
            opacity: "1",
          },
          "section-1"
        );
        timeline.to(
          ".feature-two",
          {
            opacity: "1",
          },
          "section-2"
        );
        timeline.to(
          ".feature-one",
          {
            marginTop: "-110",
            opacity: "0",
          },
          "section-2"
        );
        timeline.to(
          ".feature-three",
          {
            opacity: "1",
          },
          "section-3"
        );
        timeline.to(
          ".feature-two",
          {
            opacity: "0",
          },
          "section-3"
        );
        timeline.to(
          ".feature-one",
          {
            marginTop: "-190%",
          },
          "section-3"
        );

        timeline.to(
          ".feature-three",
          {
            opacity: "0",
          },
          "section-4"
        );
        timeline.to(
          ".feature-one",
          {
            marginTop: "-280%",
          },
          "section-4"
        );
        timeline.to(
          ".feature-four",
          {
            opacity: "1",
          },
          "section-4"
        );

        timeline.to(
          ".icon-container",
          {
            marginLeft: "90%",
            rotate: 360,
          },
          "section-4"
        );
      }
    },
    { scope: container }
  );

  return (
    <div id="Our-Features" ref={myRef}>
      <div className="background-circle-wrapper">
        <div className="background-circle"></div>
      </div>
      <div className="features-left-part">
        <h1 className="cursor-scale">Why Choose Us?</h1>
        <div className="line">
          <div className="icon-container">
            <img src="./Assets/Images/Can.webp" alt="" width="100px" />
          </div>
        </div>
      </div>
      <div className="features-right-part">
        <div className="feature-content feature-one">
          <span></span>
          <div className="content">
            <h2 className="cursor-scale">Hight Quality</h2>
            <p>
              Nam Viet continuously develops new drinks which bring original
              natural tastes, high nutrition facts, catch the newest trends in
              the market.
            </p>
            <button className="F-BTN">
              <div className="text">READ MORE</div>
              <div className="wave"></div>
            </button>
          </div>
        </div>
        <div className="feature-content feature-two">
          <span></span>
          <div className="content">
            <h1 className="cursor-scale">Fast Delivery</h1>
            <p>
              Nam Viet also provides convenient logistic service to all ports in
              the world via air or sea shipments.
            </p>{" "}
            <button className="F-BTN">
              <div className="text">READ MORE</div>
              <div className="wave"></div>
            </button>
          </div>
        </div>
        <div className="feature-content feature-three">
          <span></span>
          <div className="content">
            <h1 className="cursor-scale">Flexible Packaging</h1>
            <p>
              Production runs in accordance with world highest standards of Food
              Safety. Big variety of soft drinks, non-alcohol drinks, fruit
              juice drinks.
            </p>{" "}
            <button className="F-BTN">
              <div className="text">READ MORE</div>
              <div className="wave"></div>
            </button>
          </div>
        </div>
        <div className="feature-content feature-four">
          {" "}
          <span></span>
          <div className="content">
            <h1 className="cursor-scale">Free Design Label</h1>
            <p>
              Customizable labels and designs. We also make the free sample for
              clients.
            </p>{" "}
            <button className="F-BTN">
              <div className="text">READ MORE</div>
              <div className="wave"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
