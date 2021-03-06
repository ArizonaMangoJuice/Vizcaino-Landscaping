import React from 'react';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazyload';
import ImageSpinner from '../ImageSpinner';

const Work = ({img, title}) => {
    const image = require('../../media/works/' + img);
    // console.log(image)
    return (
        <article data-aos='fade-up' className='work-item' tabIndex='0'>
            <LazyLoad height={'100%'} once={true} placeholder={<ImageSpinner />}>
                <img  alt={title} className='work-image' src={image.default} />
            </LazyLoad>
            <p className='work-title'>{title}</p>
        </article>
    )
};

export default Work;