import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

function App() {
    

  return (
    <div>
        <div className="hero-header">
            <div className="wrapper">
                <header>
                    <div className="logo">
                        &nbsp; &nbsp;
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
                                <Home/>
                            </div>
                    </div>
                </section>
            </div>
        </div>
        <div>
          <div className="hero-header">
              <div className="wrapper">
                <section id="about">
                    <div className="container">
                        <div className="hero-text">
                            <About/>
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
