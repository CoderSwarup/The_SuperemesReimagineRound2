import React, { useEffect, useRef } from "react";
import "./BestSellers.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { container } from "../../App";

gsap.registerPlugin(ScrollTrigger);

export default function BestSellers() {
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const mockupRef = useRef(null);

  let count = 0;
  let active = 0;
  let leftMockup = 0;
  let left_each_item = 0;

  useEffect(() => {
    const list = listRef.current.children;
    count = list.length;
    left_each_item = 100 / (count - 1);

    const changeCarousel = () => {
      const hidden_old = listRef.current.querySelector(".item.hidden");
      if (hidden_old) hidden_old.classList.remove("hidden");

      const active_old = listRef.current.querySelector(".item.active");
      active_old.classList.remove("active");
      active_old.classList.add("hidden");

      list[active].classList.add("active");
      mockupRef.current.style.setProperty("--left", leftMockup + "%");
    };

    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    };

    const debouncedChangeCarousel = debounce(() => {
      active = active >= count - 1 ? 0 : active + 1;
      leftMockup = active * left_each_item;
      carouselRef.current.classList.remove("right");
      changeCarousel();
    }, 200);

    const timeline = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".carousel-container",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          debouncedChangeCarousel();
        },
      },
    });

    return () => {
      timeline.kill();
    };
  }, [container]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          <div className="item active" style={{ "--background": "#ea3d41" }}>
            <div className="content cursor-scale">strawberry</div>
            <img
              src="./Assets/Images/BestSellersImg/fruit_strawberry.png"
              className="fruit"
              alt="Strawberry"
            />
          </div>
          <div className="item" style={{ "--background": "#2d5643" }}>
            <div className="content cursor-scale">Avocado</div>
            <img
              src="./Assets/Images/BestSellersImg/fruit_avocado.png"
              className="fruit"
              alt="Avocado"
            />
          </div>
          <div className="item hidden" style={{ "--background": "#e7a043" }}>
            <div className="content cursor-scale">Orange</div>
            <img
              src="./Assets/Images/BestSellersImg/fruit_orange.png"
              className="fruit"
              alt="Orange"
            />
          </div>
        </div>
        <div className="leaves"></div>
        <div className="mockup" ref={mockupRef}></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}
