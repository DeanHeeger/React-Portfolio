import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Social from './Social';
import emailjs from '@emailjs/browser';


const Contact = () =>{

    const [recaptchaValue, setRecaptchaValue] = useState('');
    const [showRecaptcha, setShowRecaptcha] = useState(true);
    const [userData, setUserData] = useState(
        {
            names: '',
            email: '',
            message: '',
        });

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
        setShowRecaptcha(true); // Hide the reCAPTCHA widget
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //verify the reCAPTCHA response
        if (!recaptchaValue){
           alert('please complete reCAPTCHA');
           return;
        }

        //Email regex validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex pattern
        if (!emailRegex.test(userData.email)){
            alert('Invalid email address!');
            setUserData({...userData, email: ''}); //This will clear the email field
        } 
        else{
            alert('Message sent! Thank you for contacting me.');
            setUserData({...userData, names: '', email: '', message: ''});
            sendDataToFireBase();  
        }

        //EmailJS
        const serviceID = 'service_5gmpf6a';
        const templateID = 'template_rx7xh5a';
        const publicKey = 'Thm7ha6w_Ko2bsFYC';

        //Create new object containing dynamic template params
        const templateParams = {
            from_name: userData.names,
            from_email: userData.email,
            to_name: 'Dean Heeger',
            message: userData.message,
        };
        
        //Send email
        emailjs.send(serviceID, templateID, templateParams, publicKey).then((response) => {
            console.log('Email sent successfully!', response);
            setUserData({...userData, names: '', email: '', message: ''});
        })
        .catch((error) => {
            console.error('Error sending email: ', error);
        })
    };

    const data = (e) =>{
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    };

    //Function to send data to FireBase
    const sendDataToFireBase = async () => {
        const { names, email, message } = userData;

        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                names,
                email,
                message,
            }),
        };

        const response = await fetch('https://dean-portfolio-4f075-default-rtdb.firebaseio.com/Messages.json', options);
        console.log(response);
    }

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
                <div className="contact">
                    <div className="contact-section">
                        {/*<img src='./images/contact-me.gif' alt="Contact Me"/>*/}
                
                        <h1>Contact me here:</h1>
                            <form id='contact' onSubmit={handleSubmit}>
                                <input type="text" id="names" name="names" value={userData.names} placeholder="Name and Surname" onChange={data} required/>
                                <br/>
                                <input type="email" id="email" name="email" value={userData.email} placeholder="Email address" onChange={data}/>
                                <br/>
                                <textarea id="message" name="message" value={userData.message} rows="4" col="50" placeholder="Your message" onChange={data} required/>
                                <br/>
                                {showRecaptcha && (
                                <ReCAPTCHA sitekey="6LcEYfonAAAAAJFViH82_dh8iPQ7b3GeD2_Q2yIv" onChange={handleRecaptchaChange}/>
                                )}
                                <div>
                                    <button type='submit' className='btn'>SUBMIT</button>
                                    <button type='button' className='btn' onClick={reset}>CLEAR</button>
                                </div>
                            </form>
                    </div>
                    <Social/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;