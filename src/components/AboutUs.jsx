import { Container } from 'react-bootstrap';
import './css/AboutUs.css';

function AboutUs() {
    return (
        <section id="about-us" className='py-lg-5'>
            <Container fluid="lg" className='d-flex flex-column flex-lg-row align-items-lg-center gap-lg-5 h-100'>
                {/* image */}
                <div className="image w-100 w-lg-50 mt-3 mb-5">
                    <img src="/img/about-img.jpg" alt="smiling clown dressed in rainbow clothes with a backpack" />
                </div>

                {/* text */}
                <div className="text-about w-100 w-lg-50">
                    <div className='find-out-more mb-2'>Scopri di più su di noi</div>
                    <h2>
                        Chi siamo
                    </h2>
                    <p className='welcome py-2'>
                        Benvenuti nel nostro magico mondo dove la programmazione incontra il divertimento sfrenato! Offriamo corsi unici e stravaganti, guidati da istruttori eccentrici che trasformano ogni lezione in un'avventura indimenticabile. Unisciti a noi per scoprire il lato più fantasioso del coding!
                    </p>

                    {/* list */}
                    <ul className='list-unstyled mb-4'>
                        <li className='d-flex gap-3 align-items-start'>
                            <div className="icon">
                                <svg id="tick-circle" aria-label="orange circle with a white check" viewBox="0 0 15 15">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="list_item">
                                Esperti di programmazione che rendono ogni lezione uno spettacolo creativo.
                            </div>
                        </li>
                        <li className='d-flex gap-3 align-items-start'>
                            <div className="icon">
                                <svg id="tick-circle" aria-label="orange circle with a white check" viewBox="0 0 15 15">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="list_item">
                                Corsi divertenti e coinvolgenti che trasformano l'apprendimento in un'avventura.
                            </div>
                        </li>
                        <li className='d-flex gap-3 align-items-start'>
                            <div className="icon">
                                <svg id="tick-circle" aria-label="orange circle with a white check" viewBox="0 0 15 15">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="list_item">
                                Connettiti con appassionati di coding di tutto il mondo per un'esperienza unica e divertente.
                            </div>
                        </li>
                    </ul>

                    <a href="#" className='btn find-btn rounded-5'>Scopri di più</a>
                </div>

            </Container>
        </section>
    )
};

export default AboutUs;