import 'aos/dist/aos.css';

export default function Card (
    {
        title, mainImage, desc, duration,
        setModal
    }
){
    const image = require('../../media/'+mainImage);
    return (

        <article data-aos='fade-right' className='gallery-card'>
            <img data-aos='fade-down' alt={mainImage + Math.random} onClick={() => setModal(true)} src={image.default} className='gallery-card-image' />
            <section className='gallery-text'>
                <h1 data-aos='fade-up'>{title}</h1>
                <p data-aos='fade-down'>{desc}</p>
                <p data-aos='fade-down'>{duration}</p>
                <p data-aos='fade-up'>Free Estimate</p>
                <a data-aos='fade-right' href='tel:1-555-555-5555'>Call Now</a>
            </section>
        </article>
    )
}