import React from 'react';
import './Course.css'

const Course = (props) => {
    const { course_name, course_price, author} = props.course;
    return (
        <div className="course">
            
            <div>
                <h3 className="course-name">{course_name}</h3>
                <br />
                <p> By: { author}</p>
                <p>${course_price}</p>
                
                <button
                 className="enroll-button"
                 onClick={()=> props.handleAddCourse(props.course)}
                
                >
                   Enroll
                    </button>
            </div>

        </div>
    );
};

export default Course;