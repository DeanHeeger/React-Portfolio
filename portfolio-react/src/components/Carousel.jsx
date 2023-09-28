import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel(){
    const sliderRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;

      const autoSlide = () => {
        slider.slickNext();
      };

      const interval = setInterval(autoSlide, 3000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      };
    return(
      <div className="response">
        <div className="container-skills">
        <h1>Skills</h1>
        <br/>
        <Slider ref={sliderRef}{...settings}>
          <div className="card">
            <div className="images">
              <img src="/images/html.png" alt="HTML" />
            </div>
            <div className="class-body">
              <br/>
              <h3>HTML5</h3>
            </div>
          </div>
          <div className="card">
            <div className="images">
              <img src="/images/css-3.png" alt="CSS" />
            </div>
            <div className="class-body">
              <br/>
              <h3>CSS3</h3>
            </div>
          </div>
          <div className="card">
          <div className="images">
            <img src="/images/js.png" alt="JavaScript" />
          </div>
          <div className="class-body">
            <br/>
            <h3>JAVASCRIPT</h3>
          </div>
          </div>
          <div className="card">
            <div className="images">
              <img src="/images/sql.png" alt="SQL" />
            </div>
            <div className="class-body">
              <br/>
              <h3>SQL</h3>
            </div>
          </div>
          <div className="card">
            <div className="images">
              <img src="/images/node-js.png" alt="NodeJS" />
            </div>
            <div className="class-body">
              <br/>
              <h3>NODEJS</h3>
            </div>
          </div>
          <div className="card">
            <div className="images">
              <img src="/images/python.png" alt="Python" />
            </div>
            <div className="class-body">
              <br/>
              <h3>PYTHON</h3>
            </div>
          </div>
          <div className="card">
            <div className="images">
              <img src="/images/react.png" alt="React" />
            </div>
            <div className="class-body">
              <br/>
              <h3>React</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
    )
}

export default Carousel;