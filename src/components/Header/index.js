export default function Header(props){
    return(
        <header>
            <section className='header-logo'>
                <img className='logo' src={process.env.PUBLIC_URL + '/img/logo-1.png'} alt='vizcaino landscape logo'/>
            </section>
            <nav className='header-nav'>
                <a href='#' className='header-link'>services</a>
                <a href='#' className='header-link'>Works</a>
                <a href='#' className='header-link'>Contact</a>
            </nav>
        </header>
    )
}