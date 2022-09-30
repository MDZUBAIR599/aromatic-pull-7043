import React from "react";
import "./slider.css";
import left_image from "../../Assets/slider/left_image.png";
import middle_image from "../../Assets/slider/middle_image.png";
import right_image from "../../Assets/slider/right_image.png";
import right_arrow from "../../Assets/slider/right_arrow.png";
import left_arrow from "../../Assets/slider/left_arrow.png";
import match_image from "../../Assets/slider/match_image.png";
import table_image from "../../Assets/slider/table_image.png";

import { changelft, next } from "./script";
import { Box } from "@chakra-ui/react";

const Slider = () => {
  return (
    <>
      <Box id="maroon">
      
        <img alt="left" id="btn_prev" src={left_arrow} onClick={changelft} />
        <img alt="right" id="left" src={left_image} />
        <img alt="match" id="matches" src={middle_image} />
        <img alt="right" id="right" src={right_image} />
        <img alt="right-arror" id="btn_next" src={right_arrow}  onClick={next } />
     
      </Box>
       <Box id="table">
        <img alt="bigImage" id="table_image" src={match_image} />
      </Box>
    </>
  );
};

export default Slider;


// <div id="maroon">
//         <div id="cardbox">
//         <img alt="left" id="btn_prev" src={left_arrow} onClick={changelft} />
//         <img alt="right" id="left" src={left_image} />
//         <img alt="match" id="matches" src={middle_image} />
//         <img alt="right" id="right" src={right_image} />
//         <img alt="right-arror" id="btn_next" src={right_arrow}  onClick={next } />
//         </div>
//       </div>
//        <div id="table">
//         <img alt="bigImage" id="table_image" src={match_image} />
//       </div>