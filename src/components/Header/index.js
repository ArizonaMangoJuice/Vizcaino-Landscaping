import 'aos/dist/aos.css';
import LazyLoad from 'react-lazyload';
export default function Header(props){
    return(
        <header data-aos='fade-down'>
            <section className='header-logo'>
                <a href='#home'>
                    <LazyLoad once={true}>
                        <img className='logo' src={process.env.PUBLIC_URL + '/img/logo-1.png'} alt='vizcaino landscape logo'/>
                    </LazyLoad>
                </a>
            </section>
            <nav className='header-nav'>
                <a href='#services' className='header-link'>services</a>
                <a href='#work' className='header-link'>Works</a>
                <a href='#contact' className='header-link'>Contact</a>
            </nav>
        </header>
    )
}