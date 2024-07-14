import './css/Footer.css';
import social_icons from '../assets/js/social_icons';
import { Col, Container, Row } from 'react-bootstrap';
import footer_links from '../assets/js/footer_links';

function Footer() {
    return (
        <footer>
            <div className="footer-top py-5">
                <Container fluid="xl">
                    <Row className="row-cols-1 row-cols-xl-5 g-5 g-xl-3">
                        <Col>
                            <div className="social">
                                <div className="logo mb-3">
                                    <img src="/img/logo.png" alt="CodeCircus green logo" />
                                </div>
                                <div className="social-icons">
                                    {social_icons.map(icon => (
                                        <a href={icon.href} key={icon.id} className='icon-link'>
                                            <svg id={icon.iconId} viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d={icon.d} role='img' aria-label={icon.description} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Col>

                        {footer_links.map((footer_link, index) => (
                            <Col key={index}>
                                <h5>{footer_link.title}</h5>
                                <ul className='list-unstyled m-0'>
                                    {footer_link.links.map((link, linkIndex) => (

                                        <li key={linkIndex}>
                                            {link.href ? (
                                                <a href={link.href} className='link'>
                                                    {link.text}
                                                </a>

                                            ) :
                                                (
                                                    <span>{link.text}</span>
                                                )
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>



                </Container>
            </div>

            <div className="footer-bottom border-top py-3">
                <Container fluid="xl" className='d-flex flex-column flex-xl-row justify-content-xl-between gap-2 gap-xl-0'>
                    <div className="copyright"><span>&copy;</span> 2024 Boolean. All rights reserved.</div>
                    <div className="allegria">Allegria! (Mike Bongiorno)</div>
                </Container>
            </div>
        </footer>
    )
};

export default Footer;