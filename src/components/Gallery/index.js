import React, { useEffect } from 'react';
import Card from '../Card';
import data from '../../static/data';

export default function Gallery({ modal, setModal, setImages, images }) {
    console.log('this is the images', images)
    useEffect(() => {
        // console.log('hey this ran when its clicked')
    }, [modal]);

    const galleryCards = data.galleryCards.map(({ title, mainImage, desc, duration, images }) => (
        <Card key={title} setModal={() => setModal(true)} title={title} desc={desc}
            setImages={() => setImages(images)} mainImage={mainImage} duration={duration} />
    ));

    return (
        <section id='services' className='gallery'>
            {galleryCards}
        </section>
    );
}