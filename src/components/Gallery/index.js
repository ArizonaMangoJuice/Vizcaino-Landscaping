import React, { useEffect } from 'react';
import Card from '../Card';
import data from '../../static/data';

export default function Gallery ({modal, setModal}){
    
    useEffect(() => {
        // console.log('hey this ran when its clicked')
    }, [modal]);

    const galleryCards = data.galleryCards.map(({title, mainImage, desc, duration,images}) => (
        <Card key={title} setModal={() => setModal()} title={title} desc={desc} 
              images={images} mainImage={mainImage} duration={duration} />
    ));

    return (
        <section id='services' className='gallery'>
            {galleryCards}
        </section>
    );
}