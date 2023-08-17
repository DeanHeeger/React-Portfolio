
//SOMETHING IS WRONG WITH THIS CODE. FIGURE IT OUT OR TRY SOMETHING ELSE.

import React, { useState } from 'react';

const Contact = () =>{
    const [userData, setUserData] = useState(
        {
            names: '',
            email: '',
            message: '',
        }
    )

    let name, value;
    const data = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUserData({...userData, [name]:value});
    }

    return(
        <>
        <div className="container">
            <div className="hero-text">
                <h1>Contact me here:</h1>
                <div className="contact">
                    <input type="text" id="names" name="names" value={userData.names} placeholder="Name and Surname" onChange={data}/>
                    <br/>
                    <input type="text" id="email" name="email" value={userData.email} placeholder="Email address" onChange={data}/>
                    <br/>
                    <textarea id="message" name="message" value={userData.message} rows="4" col="50" placeholder="Your message" onChange={data}/>
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
        </>
    )
}

export default Contact();