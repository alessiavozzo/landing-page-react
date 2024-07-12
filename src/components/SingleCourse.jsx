import './css/Courses.css';

function SingleCourse({ course }) {
    let stars = [];
    const star = (i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" aria-label="star-icon" role="img" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>);

    for (let i = 0; i < course.stars; i++) {
        stars.push(star(i));
    }

    return (
        <div className="course-card card p-3 rounded-3 h-100">

            <img className="card-img-top rounded-3" src={`/img/${course.img}`} alt={course.alt} />

            {/* badge conditional rendering */}
            {course.badge &&
                <div className="badge" aria-label={`badge text: ${course.badge}`}>{course.badge}</div>
            }

            <div className="card-body p-0 pt-3">
                <div className="info d-flex justify-content-between mb-3">
                    <div className="type">{course.type}</div>
                    <div className="hours">
                        <svg id="clock" aria-label="clock icon" role="img" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8" />
                        </svg>
                        {course.hours}
                    </div>
                </div>
                <h5 className="card-title mb-3">{course.title}</h5>
                <div className="card-text author-rating d-flex align-items-center gap-2 m-0">
                    <span className='author'>By: {course.author}</span>
                    <span className='rating d-flex'>
                        {stars}
                    </span>
                </div>

            </div>

        </div>
    )
};

export default SingleCourse;