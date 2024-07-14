import { Container, Row, Col } from 'react-bootstrap';
import './css/Values.css';

function Values() {

    const reasons = [
        "Ridendo, l'apprendimento della programmazione diventa un'esperienza divertente e piacevole.",
        "I nostri insegnanti sono conosciuti per conoscenza tecnica, fantasia e intrattenimento.",
        "Partecipa a attività pratiche che rendono il coding tangibile e coinvolgente.",
        "Risolvi problemi e completa progetti che stimolano la tua immaginazione e ingegno-",
        "Connettiti con altri studenti appassionati che condividono il tuo entusiasmo per la programmazione.",
        "Impara a programmare  attraverso avventure tematiche, come viaggi spaziali o mondi magici.",
        "Lavora su progetti stravaganti, come creare meme o programmare danze per robot.",
        "Ricevi feedback positivo e supporto continuo dai nostri istruttori e dalla comunità."
    ];

    const checkIcon = (<svg id="tick-circle" aria-label="orange circle with a white check" viewBox="0 0 15 15">
        <path fill="currentColor" fillRule="evenodd"
            d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
            clipRule="evenodd" />
    </svg>)

    return (
        <section id="values" className='py-5'>
            <Container fluid="xl">
                <div className="added-values text-center mb-2">
                    Valori aggiunti
                </div>
                <h2 className='mb-4 text-center'>
                    I Nostri Corsi Piacciono Perchè...
                </h2>

                <Row className='g-2'>
                    {reasons.map((reason, index) => (
                        <Col xl={6} className='d-flex gap-3' key={index}>
                            <div className="check-icon">{checkIcon}</div>
                            <div className="reason-text">{reason}</div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
};

export default Values;