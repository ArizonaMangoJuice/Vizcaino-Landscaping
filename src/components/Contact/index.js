import React from 'react';

const Contact = (props) => {
    return (
        <form className='contact-form'>
            <input placeholder='Email' type='email' />
            <input placeholder='Name' type='text' />
            <input placeholder='Phone Number' type='text' />
            <textarea value='' placeholder='Comments or Questions?'></textarea>
        </form>
    );
};

export default Contact;