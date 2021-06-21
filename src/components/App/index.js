import Header from "../Header";
import Gallery from "../Gallery";
import Footer from "../Footer";
import Contact from '../Contact';

export default function App(props) {
	return (
		<main>
			<div className="main-container">
				<Header />
                
                <article className='call-to-action-main'>
                    <h1>LANDSCAPING SERVICES</h1>
                    <p>We create a cheerful & pleasant ambience</p>
                    <div className='call-to-action-main-buttons'>
                        <a className='call-to-action-main-button' href='tel:+5555555555'>MORE INFO</a>
                        <a className='call-to-action-main-button' href='tel:+5555555555'>CALL US</a>
                    </div>
                </article>
                <Gallery />
                <Contact />
                <Footer />
			</div>
		</main>
	);
}
