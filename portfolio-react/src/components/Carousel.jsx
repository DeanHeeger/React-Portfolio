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
            <img src="/images/html.png" alt="HTML" />
            <div className="class-body">
              <br/>
              <h3>HTML5</h3>
              <p>
                HTML5 is the latest version of HTML for creating web pages with new features like audio and video support, 
                offline storage, and improved forms, making it easier to create engaging and user-friendly web pages.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/images/css-3.png" alt="CSS" />
            <div className="class-body">
              <br/>
              <h3>CSS3</h3>
              <p>
                CSS3 is the latest CSS version for describing web page presentation with new features like gradients, 
                animations, and shadows, allowing for visually appealing pages with less need for images and JavaScript.
              </p>
            </div>
          </div>
          <div className="card">
          <img src="/images/js.png" alt="JavaScript" />
          <div className="class-body">
            <br/>
            <h3>JAVASCRIPT</h3>
            <p>
              JavaScript creates interactive web pages and applications that run in the user's web browser. It is a core 
              web technology supported by all modern web browsers.
            </p>
          </div>
          </div>
          <div className="card">
            <img src="/images/sql.png" alt="SQL" />
            <div className="class-body">
              <br/>
              <h3>SQL</h3>
              <p>
                SQL manages relational databases, allowing developers to interact with data and modify or delete it. It is 
                widely used and supported by most database management systems.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/images/node-js.png" alt="NodeJS" />
            <div className="class-body">
              <br/>
              <h3>NODEJS</h3>
              <p>
                Node.js is a JavaScript runtime for building scalable, network-based applications like web servers, 
                chat apps, and APIs. It has a large community and is supported by many libraries and tools.
              </p>
            </div>
          </div>
          <div className="card">
            <img src="/images/python.png" alt="Python" />
            <div className="class-body">
              <br/>
              <h3>PYTHON</h3>
              <p>
                Python is a high-level, easy-to-learn programming language used for web development, data analysis, 
                and automation. It has a large community and vast ecosystem of libraries and tools. It is also 
                cross-platform.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    )
}

export default Carousel;