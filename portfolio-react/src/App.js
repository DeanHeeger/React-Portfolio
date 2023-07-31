import './App.css';

function App() {
  return (
    <div>
        <div className="hero-header">
            <div className="wrapper">
                <header>
                    <div className="logo">
                        <a href="index.html"><i className="fa-solid fa-h"></i></a>
                        <div className="logo-text">Dean Heeger</div>
                    </div>
                    <nav>
                        <div className="togglebtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="navlinks">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">ABOUT</a></li>
                            <li><a href="/">SKILLS</a></li>
                            <li><a href="/">CONTACT ME</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="container">
                    <div className="hero-pic">
                        <img src='/images/pic1.jpeg' alt="Profile pic"/>
                    </div>
                    <div className="hero-text">
                        <h5>Hi! I am Dean Heeger, a </h5>
                        <span className="input">Fullstack Developer</span>
                        <br/>
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
                            <a href="/" className="btn">Contact me</a>
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
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.js"></script>
        <div>
          <div class="hero-header">
              <div class="wrapper">
                  <div class="container">
                      <div class="hero-text">
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
                          
                          <div class="btn-group">
                              <a href="./images/Dean Heeger CV.pdf" class="btn active">Download CV</a>
                          </div>
                          <div class="social">
                              <a href="https://www.instagram.com/dean_heeger/"><i class="fa-brands fa-instagram"></i></a>
                              <a href="https://za.linkedin.com/in/dean-heeger-32a915170"><i class="fa-brands fa-linkedin"></i></a>
                              <a href="https://wa.me/+27826912641"><i class="fa-brands fa-whatsapp"></i></a>
                              <a href="https://github.com/DeanHeeger?tab=repositories"><i class="fa-brands fa-github"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}

export default App;
