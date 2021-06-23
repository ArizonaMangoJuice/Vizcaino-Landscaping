import React from 'react';

const Work = ({img, title}) => {
    return (
        <article className='work-item'>
            <img className='work-image' src={`../../media/works/${img}`} />
            <p className='work-title'>{title}</p>
        </article>
    )
};

export default Work;