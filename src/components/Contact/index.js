import React from 'react';
import 'aos/dist/aos.css';

const Contact = (props) => {
    return (
    <section data-aos='fade-right' id='contact' className='contact-container'>
        <h1 className='contact-title'>Contact Us</h1>
        <p className='contact-message'>Call or Message Us for a Free Quote!</p>
        <form className='contact-form'>
            <input className='contact-email' placeholder='Email' type='email' />
            <input placeholder='Name' type='text' />
            <input className='contact-phone' placeholder='Phone Number' type='text' />
            <textarea rows='5' className='contact-comments' placeholder='Comments or Questions?'></textarea>
            <button className='contact-button'>Send!</button>
        </form>
    </section>
    );
};

export default Contact;