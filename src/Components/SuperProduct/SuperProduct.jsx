import React from "react";
import { container } from "../../App";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./SuperProductStyle.css";
import Button1 from "../UI/Buttons/Button1";

export default function SuperProduct() {
  useGSAP(
    () => {
      if (container !== null) {
        let tl7 = gsap.timeline({
          scrollTrigger: {
            trigger: "#Super-Product",
            start: "50% 50%",
            end: "300% 50%",
            pin: true,
            // markers: true,
            scrub: 1,
          },
        });
        tl7.to("#Explore", {
          bottom: "7%",
        });
        tl7.to(
          ".our-super-product-txt-div",
          {
            height: "60vh",
          },
          "height"
        );
        tl7.to(
          ".our-super-product-txt",
          {
            height: "60vh",
          },
          "height"
        );
        tl7.to(
          "#SP-text1",
          {
            left: "0%",
            color: `hsl(106, 100%, 50%)`,
          },
          "height"
        );
        tl7.to(
          "#SP-text2",
          {
            right: "0%",
            color: " hsl(0, 100%, 64%)",
          },
          "height"
        );
        tl7.to(".scroll-img", {
          // marginTop: "-300%",
        });
      }
    },
    { scope: container }
  );
  return (
    <div id="Super-Product">
      <div className="our-super-product-txt">
        <h1 id="SP-text1" className="cursor-scale">
          Exploring New
        </h1>
        <h1 id="SP-text2" className="cursor-scale">
          Super Product
        </h1>
      </div>
      <div className="our-super-product-txt-div">
        <div className="scroll-super-product">
          <div className="scroll-img">
            {/* <img src="./Assets/Images/1.jpg" alt="" />
            <img src="./Assets/Images/2.jpg" alt="" />
            <img src="./Assets/Images/10.jpg" alt="" />
            <img src="./Assets/Images/11.jpg" alt="" />
            <img src="./Assets/Images/12.jpg" alt="" />
            <img src="./Assets/Images/13.jpg" alt="" />
            <img src="./Assets/Images/14.jpg" alt="" />
            <img src="./Assets/Images/1.jpg" alt="" />
            <img src="./Assets/Images/2.jpg" alt="" />
            <img src="./Assets/Images/10.jpg" alt="" /> */}
            <video
              src="./Assets/Videos/OutSuperProductVideo.mp4"
              autoPlay
              loop
              muted
              className="Video"
            ></video>
          </div>
        </div>
      </div>

      <div id="Explore">
        <Button1 text={"EXPLORE"} />
      </div>
    </div>
  );
}
