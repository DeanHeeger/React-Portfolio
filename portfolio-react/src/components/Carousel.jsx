import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="container-skills">
        <h1>Skills</h1>
        <Slider {...settings}>
          <div className="card">
            <img src="/images/html.png" alt="HTML"/>
          </div>
          <div className="card">
            <img src="/images/css-3.png" alt="CSS"/>
          </div>
          <div className="card">
          <img src="/images/js.png" alt="JavaScript"/>
          </div>
          <div className="card">
            <img src="/images/sql.png" alt="SQL"/>
          </div>
          <div className="card">
            <img src="/images/node-js.png" alt="NodeJS"/>
          </div>
          <div className="card">
            <img src="/images/python.png" alt="Python"/>
          </div>
        </Slider>
      </div>
    )
}

export default Carousel