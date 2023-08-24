import React, { useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Social from './components/Social';
import About from './components/About';
import Typed from 'typed.js';

function App() {
    //Code for typing animation on home page.
    const typedRef = useRef(null);

    useEffect(() => {
        const typedOptions = {
        strings:[
            "Full Stack Developer", 
            "Web Developer", 
            "SQL Developer",
            "Programmer",
            "Team Player"
        ],
        typeSpeed:55,
        backSpeed:50,
        startDelay:100,
        backDelay:100,
        showCursor: true,
        loop:true
        };

        const typed = new Typed(typedRef.current, typedOptions);

        return () => {
            typed.destroy(); //Destroy Typed instance when word unmounts.
        };
    }, []);

  return (
    <div>
        <div className="hero-header">
            <div className="wrapper">
                <header>
                    <div className="logo">
                        <a href="#home"><i className="fa-solid fa-h"></i></a>
                        <div className="logo-text">Dean Heeger</div>
                    </div>
                    <Navbar/>
                </header>
                <section id="home">
                    <div className="container">
                        <div className="hero-pic">
                            <img src='/images/pic1.jpeg' alt="Profile pic"/>
                        </div>
                            <div className="hero-text">
                                <h5>Hi! I am Dean Heeger, a </h5>
                                <div>
                                   <span className="input" ref={typedRef}/>
                                </div>
                                <p>
                                    Ever since I was a little boy, I loved solving problems and helping others. 
                                    I loved seeing how things work, so I would take things apart and put them back together again. 
                                    I have always been fascinated with technology and how fast it's growing.
                                </p>
                                <br/>
                                <p>
                                    With a strong background in programming languages such as HTML, CSS, JavaScript, 
                                    Python, React, and SQL, I am able to tackle complex software challenges and deliver 
                                    innovative solutions that meet and exceed client expectations.
                                </p>
                                <div className="btn-group">
                                    <a href="./images/Dean Heeger CV.pdf" className="btn" download="">Download CV</a>
                                    <a href="#contact" className="btn">Contact me</a>
                                </div>
                                <Social/>
                            </div>
                    </div>
                </section>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.js"></script>
        <div>
          <div className="hero-header">
              <div className="wrapper">
                <section id="about">
                    <div className="container">
                        <div className="hero-text">
                            <About/>
                            <Social/>
                        </div>
                    </div>
                </section>
              </div>
          </div>
      </div>
      <div>
        <section id="skills">
            <div className='container'>
                <div className='hero-text'>
                  <Carousel/>  
                </div>
            </div>
        </section>
      </div>
      <div>
        <section id="contact">
            <Contact/> 
        </section>
      </div>
    </div>
  );
}

export default App;
