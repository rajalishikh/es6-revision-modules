import React from 'react';
import './Cart_style.css';

const Cart = ({cart,remove}) => {
    return (
        <div className='cart_container'>
            {
                cart.map((item,idx)=><div>

               <img key={idx} src={item.img}  ></img>
               <button onClick={()=>remove(item.id)}>Remove</button> 
                </div>)
            }
            
        </div>
    );
};

export default Cart;