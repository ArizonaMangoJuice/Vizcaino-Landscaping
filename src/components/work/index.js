import React from 'react';

const Work = ({img, title}) => {
    const image = require('../../media/works/' + img);
    // console.log(image)
    return (
        <article className='work-item' tabIndex='0'>
            <img alt={title} className='work-image' src={image.default} />
            <p className='work-title'>{title}</p>
        </article>
    )
};

export default Work;