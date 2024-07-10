import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './css/Header.css';

function Header() {
    return (
        <header>
            {/* orange topbar */}
            <div className="top-banner">
                <span>Ottieni il tuo primo corso con uno sconto del 50%. L'offerta è valida solo per i primi 50 studenti. </span>
                <a href="#" className='register' tabIndex={0}>Registrati adesso</a>
            </div>

            {/* navbar with offcanvas menu and icons */}
            <Container>
                <Navbar expand="lg" className='circus-navbar'>
                    <Navbar.Brand href="#">
                        <img src="/img/logo.png" alt="code circus green logo" tabIndex={0} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#" tabIndex={0} >Home</Nav.Link>
                            <NavDropdown title="Corsi" id="courses-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" tabIndex={0}>Eventi</Nav.Link>
                            <Nav.Link href="#" tabIndex={0}>Contatti</Nav.Link>
                            <Nav.Link href="#" tabIndex={0}>Registrati</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )
}

export default Header;