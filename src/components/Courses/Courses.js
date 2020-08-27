import React, { useState } from 'react';
//import fakeData from '../../fakeData/fakeData'
import './Courses.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Courses = () => {
    
   
   
    const [courses,setProducts] = useState([{
        "id": 1,
        "course_name": "javascript",
        "course_price": "100",
        "author": "Jonath",
       
        
      }, {
        "id": 2,
        "course_name": "Python",
        "course_price": "120",
        "author": "Mahmud",
        
      }, {
        "id": 3,
        "course_name": "Ruby",
        "course_price": "150",
        "author": "Siraj",
        
      }, {
        "id": 4,
        "course_name": "java",
        "course_price": "250",
        "author": "Himesh",
      },
      {
        "id": 5,
        "course_name": "C++",
        "course_price": "200",
        "author": "Jessy",
      },
      {
        "id": 6,
        "course_name": "Node",
        "course_price": "170",
        "author": "Khaled",
      },
      {
        "id": 7,
        "course_name": "Express JS",
        "course_price": "180",
        "author": "Jui",
      },
      {
        "id": 8,
        "course_name": "Go Lang",
        "course_price": "350",
        "author": "Tamim",
      },
      {
        "id": 9,
        "course_name": "Scala",
        "course_price": "270",
        "author": "Mateen",
      },
      {
        "id": 10,
        "course_name": "c#",
        "course_price": "290",
        "author": "Jalal",
      },
      {
        "id": 11,
        "course_name": "DEVOPS",
        "course_price": "500",
        "author": "Rittik",
      },
      {
        "id": 12,
        "course_name": "Tensorflow",
        "course_price": "350",
        "author": "Jalal",
      },
      {
        "id": 13,
        "course_name": "PHP",
        "course_price": "160",
        "author": "Hasin",
      },
      {
        "id": 4,
        "course_name": "pandas",
        "course_price": "260",
        "author": "Harmany",
      },
      {
        "id": 4,
        "course_name": "spring",
        "course_price": "250",
        "author": "Mahtabub",
      }
    
    
    
    ])
    const [cart,setCart] = useState([])

    const handleAddCourse = (course) =>{
        
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className="courses-container">
            <div className="course-container">
                
                {
                        courses.map(course => <Course 
                            handleAddCourse = {handleAddCourse}
                            course={course}>
    
                            </Course>)
                    }
                
                
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;