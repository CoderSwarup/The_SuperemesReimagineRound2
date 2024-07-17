import React from "react";
import "./Footer.css";
import { container } from "../../App";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Footer() {
  useGSAP(
    () => {
      if (container) {
        let timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#Footer",
            start: "top -5%",
            end: "top -2%",
            // markers: true,
            scrub: 1,
          },
        });
        timeline.from("#Footer", {
          scale: 0.8,
        });
      }
    },
    { scope: container }
  );
  return (
    <div id="Footer">
      <div className="f-top1"></div>
      <div className="f-top2"></div>
      <div className="f-top3"></div>
      <div className="footer">
        <div className="footer-Head">
          <h1 className="fh-1 cursor-scale-larger">
            <span className="f-h-red">vi</span>
            <span className="f-h-green">nut</span>
          </h1>
        </div>
        <div className="footer-bottom">
          <div className="footer-btm-left">
            <div className="f-left-top">
              <div className="f-circle ">
                <i className="ri-arrow-right-line"></i>
              </div>
              <h1 className="f-l-heading cursor-scale">
                Delight Your Test Buds!!!
              </h1>
            </div>
            <div className="f-left-bottom">
              <h3>@vinut 2024</h3>
              <div className="f-terms">
                <a href="#">
                  <i className="ri-arrow-right-line"></i>Terms
                </a>
                <a href="#">
                  <i className="ri-arrow-right-line"></i>Privacy
                </a>
                <a href="#">
                  <i className="ri-arrow-right-line"></i>Security
                </a>
              </div>
            </div>
          </div>
          <div className="footer-btm-right">
            <ul>
              <li>
                <div className="f-text">Our Products</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
              <li>
                <div className="f-text">Login</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
              <li>
                <div className="f-text">About</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
              <li>
                <div className="f-text">Contact</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
              <li>
                <div className="f-text">Twitter</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
              <li>
                <div className="f-text">Linkdin</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
              <li>
                <div className="f-text">Youtube</div>
                <i className="ri-arrow-right-line f-arrow"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
