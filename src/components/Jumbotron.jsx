import { Container, InputGroup, Form, Button } from 'react-bootstrap';
import './css/Jumbotron.css';

function Jumbotron() {
    return (
        <section id="jumbotron" className='pt-5'>
            <Container fluid="xl" className='d-flex flex-column flex-xl-row align-items-xl-center gap-xl-5 h-100'>
                <div className="text-circus w-100 w-xl-50">
                    <h1 className='py-2'>
                        Codecircus
                    </h1>
                    <p className='py-2'>Immergiti nel divertimento del codice, dove ogni byte è una gioia!</p>

                    <form action="">
                        <InputGroup className="group mb-5 rounded-4">
                            <input
                                type='search'
                                placeholder="Cosa vuoi imparare oggi?"
                                aria-label="Cerca cosa vuoi imparare oggi"
                                className='form-control input_search rounded-4'
                            />
                            <button type="submit" className='search-btn d-flex align-items-center justify-content-center rounded-4' aria-label="research button">
                                <svg id="search" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
                                </svg>
                            </button>
                        </InputGroup>
                    </form>
                </div>

                <div className="image w-100 w-xl-50">
                    <img src="/img/billboard-img.png" alt="clown dressed in rainbow clothes sitting in front of a computer" />
                </div>
            </Container>
        </section>
    )
}

export default Jumbotron;