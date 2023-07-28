import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <div class="hero-header">
            <div class="wrapper">
                <header>
                    <div class="logo">
                        <a href="index.html"><i class="fa-solid fa-h"></i></a>
                        <div class="logo-text">Dean Heeger</div>
                    </div>
                    <nav>
                        <div class="togglebtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul class="navlinks">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact Details</a></li>
                        </ul>
                    </nav>
                </header>
                <div class="container">
                    <div class="hero-pic">
                        <img src="images/pic1.jpeg" alt="Picture"/>
                    </div>
                    <div class="hero-text">
                        <h5>Hi! I am <span class="input">Fullstack Developer</span></h5>
                        <h1>Dean Heeger</h1>
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
                        <div class="btn-group">
                            <a href="cv/Dean Heeger CV.pdf" class="btn active" download="">Download CV</a>
                            <a href="contact.html" class="btn">Contact me</a>
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.js"></script>
    </div>
  );
}

export default App;
