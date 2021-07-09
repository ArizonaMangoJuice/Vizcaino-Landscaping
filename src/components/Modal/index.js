import React from 'react';
const Modal = ({ closeModal, images, resetImages }) => {
    // const
    return (
        <section className='gallery-modal'>
            <article className='modal-picture-container'>
                <button onClick className='modal-before'>&lt;</button>
                <img alt='house landscaping' src={require('../../media/' + images[0]).default} className='modal-current-image' />
                <button onClick={() => closeModal()} className='modal-close-modal'>X</button>
                <button className='modal-before'>&gt;</button>
            </article>
        </section>
    )
}

export default Modal;