import React, { useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import Typed from 'typed.js';

function App() {
    //Code for typing animation on home page.
    const typedRef = useRef(null);

    useEffect(() => {
        const typedOptions = {
        strings:["Full Stack Developer", "Web Developer", "SQL Developer"],
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
                                    Python, C#, and SQL, I am able to tackle complex software challenges and deliver 
                                    innovative solutions that meet and exceed client expectations.
                                </p>
                                <div className="btn-group">
                                    <a href="./images/Dean Heeger CV.pdf" className="btn" download="">Download CV</a>
                                    <a href="#contact" className="btn">Contact me</a>
                                </div>
                                <div className="social">
                                    <a href="https://www.instagram.com/dean_heeger/"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://za.linkedin.com/in/dean-heeger-32a915170"><i className="fa-brands fa-linkedin"></i></a>
                                    <a href="https://wa.me/+27826912641"><i className="fa-brands fa-whatsapp"></i></a>
                                    <a href="https://github.com/DeanHeeger?tab=repositories"><i className="fa-brands fa-github"></i></a>
                                </div>
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
                            <h1>About Me</h1>

                            <p>
                                My name is Dean Heeger, I am 23 and I am a developer.
                                From a young age, the desire to solve problems and help others has been an integral 
                                part of who I am. As a little boy, I was always fascinated with the inner workings of 
                                things, and I would often take them apart just to see how they functioned. This 
                                curiosity fueled my passion for technology, and I became enamored with the rapid 
                                growth of the industry.
                            </p>
                            <br/>
                            <p>
                                Over time, my interest in technology grew stronger, and I began to explore various 
                                programming languages such as HTML, CSS, JavaScript, Python, C#, and SQL. These languages 
                                allowed me to tackle complex software challenges and deliver innovative solutions that 
                                exceeded client expectations.
                            </p>
                            <br/>
                            <p>
                                My background in programming languages has provided me with a unique set of skills that allows 
                                me to approach problems from multiple perspectives. I am able to analyze complex systems and 
                                break them down into smaller, manageable components. This ability to think critically has 
                                been invaluable in my work as a problem solver.
                            </p>
                            <br/>
                            <p>
                                As a software developer, my love for technology has translated into a passion for creating 
                                solutions that make life easier for others. Whether it's a mobile application that simplifies 
                                daily tasks or a website that provides easy access to important information, I am constantly 
                                striving to make a positive impact on the world through my work.
                            </p>
                            <br/>
                            <p>
                                In conclusion, my passion for solving problems and helping others has been a driving force in my life. 
                                My love of technology has allowed me to pursue a career in software development, where I can use my 
                                skills to make a difference in the world. With a strong foundation in programming languages and a 
                                commitment to delivering innovative solutions, I am excited to continue growing and expanding my 
                                skills as a problem solver and technology enthusiast.
                            </p>
                            
                            <div className="btn-group">
                                <a href="./images/Dean Heeger CV.pdf" className="btn active">Download CV</a>
                            </div>
                            <div className="social">
                                <a href="https://www.instagram.com/dean_heeger/"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://za.linkedin.com/in/dean-heeger-32a915170"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://wa.me/+27826912641"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="https://github.com/DeanHeeger?tab=repositories"><i className="fa-brands fa-github"></i></a>
                            </div>
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
            <div className="container">
                <div className="hero-text">
                    <h1>Contact me here:</h1>
                    <div className="contact">
                        <input type="text" id="names" name="names" placeholder="Name and Surname"/>
                        <br/>
                        <input type="text" id="email" name="email" placeholder="Email address"/>
                        <br/>
                        <textarea id="message" name="message" rows="4" col="50" placeholder="Your message"/>
                        <div className="btn-group">
                            <a href="/" className="btn">SUBMIT</a>
                            <a href="/" className="btn">CLEAR</a>
                        </div>
                        <div className="social">
                            <a href="https://www.instagram.com/dean_heeger/"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://za.linkedin.com/in/dean-heeger-32a915170"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://wa.me/+27826912641"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="https://github.com/DeanHeeger?tab=repositories"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}

export default App;
