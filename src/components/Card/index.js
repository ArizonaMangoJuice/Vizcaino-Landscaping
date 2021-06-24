export default function Card (
    {
        title, mainImage, desc, duration,
        setModal
    }
){
    const image = require('../../media/'+mainImage);
    return (

        <article className='gallery-card'>
            <img alt={mainImage + Math.random} onClick={() => setModal(true)} src={image.default} className='gallery-card-image' />
            <section className='gallery-text'>
                <h1>{title}</h1>
                <p>{desc}</p>
                <p>{duration}</p>
                <p>Free Estimate</p>
                <a href='tel:1-555-555-5555'>Call Now</a>
            </section>
        </article>
    )
}