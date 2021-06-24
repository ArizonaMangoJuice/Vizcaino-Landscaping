import Header from "../Header";
import Gallery from "../Gallery";
import Footer from "../Footer";
import Contact from '../Contact';
import React, {useState, useEffect} from "react";
import Modal from "../Modal";
import Work from "../work";
import data from '../../static/data';

import Aos from 'aos';
import 'aos/dist/aos.css';
Aos.init();

export default function App(props) {
    const [modal, setModal] = useState(false);

    const {works} = data;

    const allWorks = works.map(({title, image}) => <Work key={title} img={image} title={title} />);

	return (
		<main id='home' className={modal ? 'stop-scroll' : ''}>
            {modal ? <Modal closeModal={() => setModal(false)} /> : null}
			<div className="main-container">
				{modal ? null: <Header /> }
                <article data-aos='fade-right' className='call-to-action-main'>
                    <h1 className='call-to-action-title' data-aos='fade-up'>LANDSCAPING SERVICES</h1>
                    <p data-aos='fade-down'>We create a cheerful & pleasant ambience</p>
                    <div data-aos='fade-right' className='call-to-action-main-buttons'>
                        <a className='call-to-action-main-button' href='tel:+5555555555'>MORE INFO</a>
                        <a className='call-to-action-main-button' href='tel:+5555555555'>CALL US</a>
                    </div>
                </article>
                <Gallery   modal={modal} setModal={() => setModal(true)}/>
                <section id='work' className='works'>
                    <h1 className='works-title'>Work We Do</h1>
                    {allWorks}
                </section>
                <Contact />
                <Footer />
			</div>
		</main>
	);
}
