import React from "react";
import "./slider.css";
import left_image from "../../Assets/slider/left_image.png";
import middle_image from "../../Assets/slider/middle_image.png";
import right_image from "../../Assets/slider/right_image.png";
import right_arrow from "../../Assets/slider/right_arrow.png";
import left_arrow from "../../Assets/slider/left_arrow.png";
import table_image from "../../Assets/slider/table_image.png";

import { changelft, next } from "./script";

const Slider = () => {
  return (
    <>
      <div id="maroon">
        <img alt="left" id="btn_prev" src={left_arrow} onClick={changelft} />
        <img alt="right" id="left" src={left_image} />
        <img alt="match" id="matches" src={middle_image} />
        <img alt="right" id="right" src={right_image} />
        <img alt="right-arror" id="btn_next" src={right_arrow}  onClick={next } />
      </div>
       <div id="table">
        <img alt="bigImage" id="table_image" src={table_image} />
      </div>
    </>
  );
};

export default Slider;
