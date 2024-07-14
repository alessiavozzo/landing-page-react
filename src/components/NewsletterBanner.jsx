import './css/NewsletterBanner.css';
import { Container } from 'react-bootstrap';

function NewsletterBanner() {
    return (
        <section id="newsletter">
            <Container fluid="xl" className='d-flex flex-column flex-xl-row justify-content-xl-center gap-xl-3'>
                <div className="title-section col-12 col-xl-6">
                    <h2>Iscriviti E Ottieni il 20% Di Sconto Sul Tuo Primo Corso Online</h2>
                    <div className="news-red">Iscriviti alla nostra newsletter e non perderti mai nessuna offerta</div>
                </div>

                <form action="" className='col-12 col-xl-6'>
                    <input type="email" name="email" id="email" className='email-input' placeholder='lascia la tua email*' aria-label='Inserisci la tua email' />
                    <button type="submit" className='btn btn-register' aria-label="Registrati alla newsletter">Registrati</button>
                </form>
            </Container>
        </section>
    )
};

export default NewsletterBanner;