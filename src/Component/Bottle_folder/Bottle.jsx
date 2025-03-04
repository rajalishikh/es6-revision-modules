import React, { useEffect, useState } from 'react';
import Bottle_Details from '../Bottles_Details/Bottle_Details';

import './Bottle.css';

const Bottle = () => {
    const [bottle,setBottle]=useState([])
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=>setBottle(data))

    },[])
    // calculate the how much buy you Bottles
    const handleBottle=(details_Bottle)=>{
        console.log("The bottle is so good")
        const new_array=[...cart,details_Bottle]
        setCart(new_array)
    }
    return (
        <div>
            <h2>Bottle container</h2>
            <p>Total bottle you are buy:{cart.length}</p>
            <div className='bottle'>
            {
                bottle.map((item)=><Bottle_Details key={item.id} bottle_de={item} handle={handleBottle} ></Bottle_Details>)
            }
            </div>
            
        </div>
    );
};

export default Bottle;