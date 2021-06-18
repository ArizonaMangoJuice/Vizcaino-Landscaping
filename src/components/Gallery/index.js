import React from 'react';
import Card from '../Card';
import data from '../../static/data';

export default function Gallery (props){
    const galleryCards = data.galleryCards.map(({title, mainImage, desc, duration}) => (
        <Card title={title} desc={desc} 
              mainImage={mainImage} duration={duration} />
    ));

    return (
        <section className='gallery'>
            {galleryCards}
        </section>
    );
}