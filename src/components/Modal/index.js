import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import ImageSpinner from '../ImageSpinner';

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
        images.length === 0 ?
            <>
                <section className='gallery-modal'>
                    <article className='modal-picture-container'>
                        <h1 className='modal-no-image-title'>We Are Currently adding Images</h1>
                        <button onClick={() => closeModal()} className='modal-close-modal'>X</button>
                    </article>
                </section>
            </>
            :
            <section className='gallery-modal'>
                <article className='modal-picture-container'>
                    <button onClick={() => prevImage()} className='modal-before'>&lt;</button>
                    <LazyLoad once={true} height={'100%'} placeholder={<ImageSpinner />}>
                        <img alt='house landscaping' src={require('../../media/gallery/' + images[currentImage]).default} className='modal-current-image' />
                    </LazyLoad>
                    <button onClick={() => closeModal()} className='modal-close-modal'>X</button>
                    <button onClick={() => nextImage()} className='modal-after'>&gt;</button>
                </article>
            </section>
    )
}

export default Modal;