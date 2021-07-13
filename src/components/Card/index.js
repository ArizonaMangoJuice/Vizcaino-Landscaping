import 'aos/dist/aos.css';
import LazyLoad from 'react-lazyload';

// onClick={() => setModal(true)}
export default function Card(
    {
        title, mainImage, desc, duration,
        setModal, setImages
    }
) {
    const image = require('../../media/' + mainImage);

    const setImagesAndModal = () => {
        setModal(true);
        setImages();
    }

    return (

        <article data-aos='fade-right' className='gallery-card'>
            <LazyLoad once={true}>
                <img onClick={() => setImagesAndModal()} data-aos='fade-down' alt={mainImage + Math.random} src={image.default} className='gallery-card-image' />
            </LazyLoad>
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