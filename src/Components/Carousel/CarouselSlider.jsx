import React, { Component } from "react";
import Slider from "react-slick";
import './SlickSlider.css'
export default class Responsive extends Component {
  render() {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
    }
    return (
      <div className = "main">
        <h2 style = {{padding: "5px 0", fontWeight : "100"}}> FRUITS </h2>
        <hr style = {{color : "#D9D9D9", margin: "5px 0 20px 0"}}/>
        <Slider {...settings}>
          <div className = "item_container">
            <div style={{display:"flex",width:"500px",height:"200px"}}>
            
            <div>
            
              <img src = "https://imagemaster.fraazo.com/fraazo-master/products/FAVO21.png?width=256&height=256&format=webp"  alt = "item"/>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>

            </div>
          </div>
    
        </Slider>
      </div>
    );
  }
}