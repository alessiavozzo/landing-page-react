import './css/Feedbacks.css';
import feedbacks from '../assets/js/feedbacks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Feedbacks() {

    return (
        <section id="feedbacks" className='my-3'>
            <Container fluid="xl">
                <div className="student-feedbacks text-center mb-3">
                    Cosa dicono gli studenti
                </div>

                <h2 className='mb-2 text-center'>Recensioni</h2>

                <div className="desktop-feedbacks d-none d-xl-block">
                    <Row>
                        {feedbacks.map(feedback => (
                            <Col key={feedback.id} className="col-4">
                                <Card className='p-4 border-0'>
                                    <Card.Body>
                                        <blockquote>
                                            "{feedback.text}"
                                        </blockquote>
                                        <div className="author d-flex gap-3 align-items-center">
                                            <div className="image">
                                                <img src={`/img/${feedback.img}`} alt={`${feedback.author} avatar`} />
                                            </div>
                                            <div className="info">
                                                <div className="name">{feedback.author}</div>
                                                <div className="job">{feedback.job}</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        ))}
                    </Row>

                </div>

                {<div className="mobile-feedbacks d-block d-xl-none" aria-label="Carosello di recensioni con indicato l'autore delle recensioni">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        aria-label="Carosello di recensioni"
                    >
                        {feedbacks.map(feedback => (
                            <SwiperSlide key={feedback.id}>
                                <Card className='p-3 border-0'>
                                    <Card.Body>
                                        <blockquote>
                                            "{feedback.text}"
                                        </blockquote>
                                        <div className="author d-flex gap-4 align-items-center mb-4">
                                            <div className="image">
                                                <img src={`/img/${feedback.img}`} alt={`${feedback.author} avatar`} />
                                            </div>
                                            <div className="info">
                                                <div className="name">{feedback.author}</div>
                                                <div className="job">{feedback.job}</div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>}


            </Container>

        </section>
    )
};

export default Feedbacks;