import React, { useEffect, useState } from 'react';
import Bottle_Details from '../Bottles_Details/Bottle_Details';

import './Bottle.css';

const Bottle = () => {
    const [bottle,setBottle]=useState([])
    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=>setBottle(data))

    },[])
    return (
        <div>
            <h2>Bottle container</h2>
            <div className='bottle'>
            {
                bottle.map((item)=><Bottle_Details key={item.id} bottle_de={item} ></Bottle_Details>)
            }
            </div>
            
        </div>
    );
};

export default Bottle;