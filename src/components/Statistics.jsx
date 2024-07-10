import { Card, Container, Row, Col } from 'react-bootstrap';
import statistics from '../assets/js/statistics';
import './css/Statistics.css';

function Statistics() {
    return (
        <section id="statistics" className='py-5'>
            <Container fluid="xl" className='px-4'>
                <Row className='g-4'>
                    {statistics.map(statistic => (
                        <Col key={statistic.id} className='col-12 col-xl-3'>
                            <Card className='stat-card p-5 rounded-4 border-0 h-100'>
                                <Card.Title className='quantity'>{statistic.quantity}</Card.Title>
                                <Card.Text className='statistic-text'>
                                    {statistic.text}
                                </Card.Text>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default Statistics;