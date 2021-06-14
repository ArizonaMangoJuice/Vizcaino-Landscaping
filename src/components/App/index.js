import Header from "../Header";

export default function App(props) {
	return (
		<main>
			<div className="main-container">
				<Header />

                <article className='call-to-action-main'>
                    <h1>LANDSCAPING SERVICES</h1>
                    <p>We create a cheerful & pleasant ambience</p>
                    <div className='call-to-action-main-buttons'>
                        <button>MORE INFO</button>
                        <button>CALL US</button>
                    </div>
                </article>
			</div>
		</main>
	);
}
