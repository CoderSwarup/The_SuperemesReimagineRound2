import React from "react";
import "../ButtonsCss.css";
export default function Button1({ text }) {
  return (
    <div id="Button1">
      <a href="#" className="button">
        <div className="button__content">
          <span className="button__text">{text}</span>

          <div className="button__reflection-1"></div>
          <div className="button__reflection-2"></div>
        </div>

        <img
          src="Assets/ButtonImg/Button1Img/star.png"
          alt=""
          className="button__star-1"
        />
        <img
          src="Assets/ButtonImg/Button1Img/star.png"
          alt=""
          className="button__star-2"
        />
        <img
          src="Assets/ButtonImg/Button1Img/circle.png"
          alt=""
          className="button__circle-1"
        />
        <img
          src="Assets/ButtonImg/Button1Img/circle.png"
          alt=""
          className="button__circle-2"
        />
        <img
          src="Assets/ButtonImg/Button1Img/diamond.png"
          alt=""
          className="button__diamond"
        />
        <img
          src="Assets/ButtonImg/Button1Img/triangle.png"
          alt=""
          className="button__triangle"
        />

        <div className="button__shadow"></div>
      </a>
    </div>
  );
}
