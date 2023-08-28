import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Social from './Social';

const Contact = () =>{

    const [recaptchaValue, setRecaptchaValue] = useState('');
    const [showRecaptcha, setShowRecaptcha] = useState(true);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
        setShowRecaptcha(false); // Hide the reCAPTCHA widget
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //verify the reCAPTCHA response
        if (!recaptchaValue){
            console.log('please complete reCAPTCHA');
            return;
        };
    }

    const [userData, setUserData] = useState(
        {
            names: '',
            email: '',
            message: '',
        });

    let name, value;
    console.log(userData);
    const data = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUserData({...userData, [name]:value});
    };

    const send = async(e) => {
        const {names, email, message} = userData;
        e.preventDefault();

        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                names, email, message
            })
        }
        const res = await fetch('https://dean-portfolio-4f075-default-rtdb.firebaseio.com/Messages.json', option);
        console.log(res);
    };

    const reset = (e) => {
        e.preventDefault();
        setUserData({
            names: '',
            email: '',
            message: ''
        });
    };

    return(
        <>
        <div className="container">
            <div className="hero-text">
                <h1>Contact me here:</h1>
                <div className="contact">
                    <form onSubmit={handleSubmit}>
                        <input type="text" id="names" name="names" value={userData.names} placeholder="Name and Surname" onChange={data} required/>
                        <br/>
                        <input type="email" id="email" name="email" value={userData.email} placeholder="Email address" onChange={data} required/>
                        <br/>
                        <textarea id="message" name="message" value={userData.message} rows="4" col="50" placeholder="Your message" onChange={data} required/>
                        
                        {/*FIX reCAPTCHA FROM TIMING OUT*/}
                        {showRecaptcha && (
                        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={handleRecaptchaChange}/>
                        )}
                        <div className="btn-group">
                            {/*<a href="/" className="btn" onClick={send}>SUBMIT</a>*/}
                            <button type='submit' className='btn' onClick={send}>SUBMIT</button>
                            <button type='button' className='btn' onClick={reset}>CLEAR</button>
                        </div>
                    </form>
                    <Social/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;