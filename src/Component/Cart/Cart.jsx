import React from 'react';
import './Cart_style.css';

const Cart = ({cart}) => {
    return (
        <div className='cart_container'>
            {
                cart.map((item,idx)=><img key={idx} src={item.img}  ></img>)
            }
            
        </div>
    );
};

export default Cart;