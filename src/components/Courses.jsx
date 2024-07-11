import './css/Courses.css';
import courses from '../assets/js/courses';
import SingleCourse from './SingleCourse';
import { Col, Container, Row } from 'react-bootstrap';

function Courses() {
    return (
        <section id="courses">
            <div className="some-courses text-center mb-2">
                Alcuni dei nostri corsi più popolari
            </div>
            <h2 className='text-center mb-4'>
                Esplora I Corsi Online
            </h2>

            <Container fluid="xl">
                <Row className='g-4'>
                    {/* course cards - try passing props to child component*/}
                    {courses.map(course => (
                        <Col key={course.id} className='col-12 col-xl-3'>
                            <SingleCourse course={course} />
                        </Col>
                    ))}

                </Row>

                <div className="button-container my-5 text-center">
                    <a href="#" class="btn btn-see-all rounded-5" aria-label="Guarda tutti i corsi">
                        Guarda tutto
                    </a>
                </div>
            </Container>
        </section>
    )
};

export default Courses;