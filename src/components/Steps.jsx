import './css/Steps.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import steps from '../assets/js/steps';

function Steps() {
    return (
        <section id="steps" className='py-3 mb-3'>
            <Container fluid="xxl">
                <div className="steps-container position-relative p-3">
                    <div className="line" aria-hidden="true"></div>
                    {steps.map((step, index) => (
                        <Row key={step.id} className={`step ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <Col xs={12} xl={6} className={`mb-4 step-col ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <Card className="step-card">
                                    <Card.Title className='p-3 step-title'>
                                        <span>{step.title}</span>
                                        <div className="speech" aria-hidden="true"></div>
                                    </Card.Title>
                                    <Card.Body>
                                        <Card.Text className='step-text'>{step.text}</Card.Text>
                                        <a href="#" aria-label={step.btn} className="btn btn-action rounded-5">{step.btn}</a>
                                    </Card.Body>
                                </Card>
                                <div className="step-icon" aria-hidden="true">
                                    <svg id={step.iconId} viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d={step.iconD} />
                                    </svg>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>

            </Container>
        </section>
    )
};

export default Steps;