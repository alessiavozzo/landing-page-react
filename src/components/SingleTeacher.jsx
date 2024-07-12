import { Card } from 'react-bootstrap';
import './css/Teachers.css';

function SingleTeacher({ teacher }) {
    return (
        <Card className='border-0 p-3 rounded-3'>
            <Card.Img variant="top" src={`/img/${teacher.img}`} className='rounded-3' alt={`${teacher.name} picture`} />
            <Card.Title>
                {teacher.name}
            </Card.Title>
            <Card.Text className='teacher_job'>
                {teacher.job}
            </Card.Text>
        </Card>
    )
};

export default SingleTeacher;