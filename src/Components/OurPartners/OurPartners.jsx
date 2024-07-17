import React from "react";
import "./OurPartners.css";
import { container } from "../../App";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function OurPartners() {
  useGSAP(
    () => {
      if (container !== null) {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#OurPartners",
            start: "50% 50%",
            end: "250% 50%",
            scrub: true,
            // markers:true,
            pin: true,
          },
        });

        tl.to(
          ".rotate-div",
          {
            rotate: -15,
            scale: 0.8,
          },
          "a"
        );
        tl.to(
          "#row-div-2",
          {
            marginTop: "5%",
          },
          "a"
        );
        tl.to(
          "#row-div-3",
          {
            marginTop: "-2%",
          },
          "a"
        );
        tl.to(
          "#row-div-4",
          {
            marginTop: "-8%",
          },
          "a"
        );
        tl.to(
          "#row-div-5",
          {
            marginTop: "-10%",
          },
          "a"
        );
        tl.to(
          ".overlay-div h1",
          {
            opacity: "1",
            delay: 0.2,
          },
          "a"
        );
        tl.to(
          ".overlay-div",
          {
            backgroundColor: "#000000b4",
          },
          "a"
        );
        tl.to(
          ".scrolling",
          {
            width: "100%",
          },
          "a"
        );
      }
    },
    { scope: container }
  );
  return (
    <div id="OurPartners">
      <div className="content-part-1">
        <div className="rotate-div">
          <div id="row-div-1" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p1.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p2.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p14.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p4.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p5.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p6.webp" alt="" />
            </div>
          </div>
          <div id="row-div-2" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p7.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p8.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p20.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p10.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p22.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p2.webp" alt="" />
            </div>
          </div>
          <div id="row-div-3" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p13.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p3.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p15.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p16.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p1.webp" alt="" />
            </div>
          </div>
          <div id="row-div-4" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p2.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p17.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p18.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p19.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p20.webp" alt="" />
            </div>
          </div>
          <div id="row-div-5" className="row-div">
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p21.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p21.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p5.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p9.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p12.webp" alt="" />
            </div>
            <div className="img-div">
              <img src="./Assets/Images/OurParteners/p19.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="overlay-div">
          <h1 className="cursor-scale">
            Our <span>Partners</span>
          </h1>
          <div className="scroll-down cursor-scale">
            <h3>SCROLL DOWN</h3>
            <div className="scroll-p">
              <div className="scrolling"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
