import React from 'react';
import './Bottle_Details.css';

const Bottle_Details = ({bottle_de}) => {

    const {category,seller,img,name}=bottle_de
    return (
        <div className='Bottle_details'>
            
            <img src={img} alt="" srcset="" width={300} />
            <p>Details:{category}</p>
            <p>Name:{name}</p>
            <p>Seller:{seller}</p>
            
        </div>
    );
};

export default Bottle_Details;