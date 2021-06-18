let stockphoto = 'https://static.wixstatic.com/media/d99169_786faa15e4af47659db8e9d2e9bc1037~mv2_d_5656_3933_s_4_2.jpg/v1/fill/w_3920,h_2424,al_c,q_90,usm_0.66_1.00_0.01/d99169_786faa15e4af47659db8e9d2e9bc1037~mv2_d_5656_3933_s_4_2.webp'

export default function Card (props){
    return (
        <article className='gallery-card'>
            <img src={stockphoto} className='gallery-card-image' />
            <section className='gallery-text'>
                <h1>Lawn Care Maintenance</h1>
                <p>Transform your lawn</p>
                <p>1 hr</p>
                <p>Free Estimate</p>
                <button>Call Now</button>
            </section>
        </article>
    )
}