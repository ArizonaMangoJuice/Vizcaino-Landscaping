import React from 'react';
let image = 'https://images.unsplash.com/photo-1523391139596-e7da8a18c733?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
const Modal = ({closeModal}) => {
    return (
        <section className='gallery-modal'>
            <article className='modal-picture-container'>
                <button onClick className='modal-before'>&lt;</button>
                <img src={image} className='modal-current-image' />
                <button onClick={() => closeModal()} className='modal-close-modal'>X</button>
                <button className='modal-before'>&gt;</button>
            </article>
        </section>
    )
}

export default Modal;