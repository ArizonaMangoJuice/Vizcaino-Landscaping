import React, { useState } from 'react';
const Modal = ({ closeModal, images, resetImages }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        currentImage === images.length - 1 ? setCurrentImage(0) : setCurrentImage(num => num + 1);
    }

    const prevImage = () => {
        currentImage === 0 ? setCurrentImage(images.length - 1) : setCurrentImage(num => num - 1);
    }
    // const
    return (
        <section className='gallery-modal'>
            <article className='modal-picture-container'>
                <button onClick={() => prevImage()} className='modal-before'>&lt;</button>
                <img alt='house landscaping' src={require('../../media/' + images[currentImage]).default} className='modal-current-image' />
                <button onClick={() => closeModal()} className='modal-close-modal'>X</button>
                <button onClick={() => nextImage()} className='modal-before'>&gt;</button>
            </article>
        </section>
    )
}

export default Modal;