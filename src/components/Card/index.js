export default function Card (
    {
        title, mainImage, desc, duration,
        setModal
    }
){
    return (

        <article className='gallery-card'>
            <img onClick={() => setModal(true)} src={mainImage} className='gallery-card-image' />
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