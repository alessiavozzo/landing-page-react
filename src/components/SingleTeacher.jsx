import { Card } from 'react-bootstrap';
import './css/Teachers.css';
import social_icons from '../assets/js/social_icons';

function SingleTeacher({ teacher }) {

    const iconsToShow = social_icons.slice(0, 4);

    return (
        <Card className='border-0 p-3 rounded-3'>
            <div className="image rounded-3">
                <Card.Img variant="top" src={`/img/${teacher.img}`} className='rounded-3 mb-3' alt={`${teacher.name} picture`} />
                <div className="social-icons-container d-flex flex-column gap-1 p-1 d-none">
                    {iconsToShow.map(icon => (
                        <a key={icon.id} className="icon" href={icon.href}>
                            <svg id={icon.iconId} viewBox="0 0 24 24" role='img' aria-label={icon.description}>
                                <path fill="currentColor"
                                    d={icon.d} />
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
            <Card.Title className='teacher_name mb-1'>
                {teacher.name}
            </Card.Title>
            <Card.Text className='teacher_job'>
                {teacher.job}
            </Card.Text>
        </Card>
    )
};

export default SingleTeacher;