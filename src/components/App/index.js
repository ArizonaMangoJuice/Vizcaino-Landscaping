import Header from "../Header";
import Gallery from "../Gallery";
import Footer from "../Footer";
import Contact from '../Contact';
import React, {useState} from "react";
import Modal from "../Modal";
import Work from "../work";
import data from '../../static/data';

export default function App(props) {
    const [modal, setModal] = useState(false);

    const {works} = data;


    const allWorks = works.map(({title, image}) => <Work key={title} img={image} title={title} />);

    console.log('this is the works', allWorks);


	return (
		<main className={modal ? 'stop-scroll' : ''}>
            {modal ? <Modal closeModal={() => setModal(false)} /> : null}
			<div className="main-container">
				{modal ? null: <Header /> }
                <article className='call-to-action-main'>
                    <h1>LANDSCAPING SERVICES</h1>
                    <p>We create a cheerful & pleasant ambience</p>
                    <div className='call-to-action-main-buttons'>
                        <a className='call-to-action-main-button' href='tel:+5555555555'>MORE INFO</a>
                        <a className='call-to-action-main-button' href='tel:+5555555555'>CALL US</a>
                    </div>
                </article>
                <Gallery  modal={modal} setModal={() => setModal(true)}/>
                <section className='works'>
                    {allWorks}
                </section>
                <Contact />
                <Footer />
			</div>
		</main>
	);
}
