import './css/Teachers.css';
import teachers from '../assets/js/teachers';
import { Col, Container, Row } from 'react-bootstrap';
import SingleTeacher from './SingleTeacher';

function Teachers() {
    return (
        <section id="teachers">
            <Container fluid="xl">
                <div className="stalk mb-2 text-center">
                    Stalkera i nostri insegnanti
                </div>
                <h2 className='text-center mb-4'>I Nostri Insegnanti</h2>
                <Row className='row-cols-1 row-cols-xl-5'>
                    {teachers.map(teacher => (
                        <Col key={teacher.id}>
                            <SingleTeacher teacher={teacher} />
                        </Col>
                    ))}
                </Row>
            </Container>

        </section>
    )
};

export default Teachers;