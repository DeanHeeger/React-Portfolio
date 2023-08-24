import React, { useRef, useEffect } from "react";
import Typed from 'typed.js';

const Home = () => {

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

    return(
        <div>
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
        </div>
    )
}

export default Home;