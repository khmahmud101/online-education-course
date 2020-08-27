import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    let course_title = [];
    for(let i=0; i<cart.length;i++){
        const course = cart[i];
        total = total + Number(course.course_price);
        course_title.push(course.course_name)

        
    }

   const formatNumber = num =>{
        return Number(num)
    }
    
    return (
        <div className="cart">
            <h4>Course List</h4>
            <p>Course Ordered: {cart.length}</p>
            <p>Course Name: {course_title.map(title=><li>{title}</li>)}</p>
            <p>Total: ${total}</p>
        </div>
    );
};

export default Cart;