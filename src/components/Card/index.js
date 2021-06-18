export default function Card ({title, mainImage, desc, duration}){
    return (
        <article className='gallery-card'>
            <img src={mainImage} className='gallery-card-image' />
            <section className='gallery-text'>
                <h1>{title}</h1>
                <p>{desc}</p>
                <p>{duration}</p>
                <p>Free Estimate</p>
                <button>Call Now</button>
            </section>
        </article>
    )
}