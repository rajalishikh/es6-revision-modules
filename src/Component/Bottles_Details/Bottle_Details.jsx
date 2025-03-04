import React from 'react';
import './Bottle_Details.css';

const Bottle_Details = ({bottle_de, handle}) => {

    const {category,seller,img,name}=bottle_de
    return (
        <div className='Bottle_details'>
            
            <img src={img} alt="" srcset="" width={300} />
            <p>Details:{category}</p>
            <p>Name:{name}</p>
            <p>Seller:{seller}</p>
            <button onClick={()=>handle(bottle_de)} >BuyIt</button>
            
        </div>
    );
};

export default Bottle_Details;