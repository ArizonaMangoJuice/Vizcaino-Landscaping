import React from 'react';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import {USER_ID, TEMPLATE_ID} from '../../apikeys';

const Contact = (props) => {
    const test = (e) => {
        e.preventDefault()// Prevents default refresh by the browser
        console.log('this is the target',e.target);
        emailjs.sendForm('service_u5ulcyh', TEMPLATE_ID, e.target, USER_ID)
        .then(result => {
        alert('Message Sent, I\'ll get back to you shortly', result.text);
        },
        error => {
        alert( 'An error occured, Plese try again',error.text)
        })
        }

    return (
    <section data-aos='fade-right' id='contact' className='contact-container'>
        <h1 className='contact-title'>Contact Us</h1>
        <p className='contact-message'>Call or Message Us for a Free Quote!</p>
        <form onSubmit={(e) => test(e)} className='contact-form'>
            <input name='email' className='contact-email' placeholder='Email' type='email' />
            <input name='name' placeholder='Name' type='text' />
            <input name='phone' className='contact-phone' placeholder='Phone Number' type='text' />
            <textarea comments='comments' rows='5' className='contact-comments' placeholder='Comments or Questions?'></textarea>
            <button className='contact-button'>Send!</button>
        </form>
    </section>
    );
};

export default Contact;