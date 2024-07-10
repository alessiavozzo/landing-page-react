import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import courses from '../assets/js/courses';
import './css/Header.css';

function Header() {
    /* console.log(courses); */
    return (
        <header>
            {/* orange topbar */}
            <div className="top-banner">
                <span>Ottieni il tuo primo corso con uno sconto del 50%. L'offerta è valida solo per i primi 50 studenti. </span>
                <a href="#" className='register' tabIndex={0}>Registrati adesso</a>
            </div>

            {/* navbar with offcanvas menu and icons */}
            <Navbar expand="lg" className='circus-navbar'>
                <Container fluid="lg">

                    {/* logo */}
                    <Navbar.Brand href="#">
                        <img src="/img/logo.png" alt="CodeCircus green logo" tabIndex={0} />
                    </Navbar.Brand>

                    {/* normal collapse navbar */}
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" tabIndex={0} >Home</Nav.Link>
                            <NavDropdown title="Corsi" id="courses-dropdown">
                                {courses.map(course => (
                                    <NavDropdown.Item key={course.id} href={course.href}>{course.title}</NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <Nav.Link href="#" tabIndex={0}>Eventi</Nav.Link>
                            <Nav.Link href="#" tabIndex={0}>Contatti</Nav.Link>
                            <Nav.Link href="#" tabIndex={0}>Registrati</Nav.Link>
                        </Nav>

                    </Navbar.Collapse> */}

                    {/* offcanvas navbar */}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end justify-content-lg-center flex-grow-1 pe-3 gap-3">
                                <Nav.Link href="#" tabIndex={0} className='menu-option' aria-label="Home">Home</Nav.Link>
                                <NavDropdown title="Corsi" id="courses-dropdown" className='menu-option'>
                                    {courses.map(course => (
                                        <NavDropdown.Item key={course.id} href={course.href} aria-label={`Corso in ${course.title}`} className='course-option'>{course.title}</NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                <Nav.Link href="#" tabIndex={0} className='menu-option' aria-label="Eventi">Eventi</Nav.Link>
                                <Nav.Link href="#" tabIndex={0} className='menu-option' aria-label="Contatti">Contatti</Nav.Link>
                                <Nav.Link href="#" tabIndex={0} className='menu-option' aria-label="Registrati">Registrati</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    {/* icons */}
                    <div className="icons w-100 d-flex align-items-center gap-3 py-2">
                        <Nav.Link href='#' className='icon-link' aria-label="profilo">
                            <svg id="user-circle" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M12 2a10 10 0 0 0-7.35 16.76a10 10 0 0 0 14.7 0A10 10 0 0 0 12 2m0 18a8 8 0 0 1-5.55-2.25a6 6 0 0 1 11.1 0A8 8 0 0 1 12 20m-2-10a2 2 0 1 1 2 2a2 2 0 0 1-2-2m8.91 6A8 8 0 0 0 15 12.62a4 4 0 1 0-6 0A8 8 0 0 0 5.09 16A7.92 7.92 0 0 1 4 12a8 8 0 0 1 16 0a7.92 7.92 0 0 1-1.09 4" />
                            </svg>
                        </Nav.Link>

                        <Nav.Link href='#' className='icon-link' aria-label="preferiti">
                            <svg id="heart" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84m-1.41 7.46l-6.21 6.21a.76.76 0 0 1-1.08 0l-6.21-6.24a4.29 4.29 0 0 1 0-6a4.27 4.27 0 0 1 6 0a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 0a4.29 4.29 0 0 1 .08 6Z" />
                            </svg>
                        </Nav.Link>

                        <Nav.Link href='#' className='icon-link' aria-label="carrello">
                            <svg id="shopping-bag" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z" />
                            </svg>
                        </Nav.Link>

                        <Nav.Link href='#' className='icon-link' aria-label="cerca">
                            <svg id="search" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
                            </svg>
                        </Nav.Link>
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;