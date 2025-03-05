import React, { useEffect, useState } from 'react';
import Bottle_Details from '../Bottles_Details/Bottle_Details';

import { addToLs, getStoreCart } from '../../Utility/store';
import './Bottle.css';

const Bottle = () => {
    const [bottle,setBottle]=useState([])
    const[cart,setCart]=useState([])
    console.log("My cart",cart)
    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=>setBottle(data))

    },[])
    // bring the data from store cart 
    useEffect(()=>{
        const bring_id=getStoreCart()
        
        console.log("using useEffect",bring_id)
        if(bottle.length){
            const new_matching_data=[]
            for(let id of bring_id){
                console.log(id)
               const matchingBottle=bottle.find(item=> item.id === id)
               if(matchingBottle){
                new_matching_data.push(matchingBottle)
               }

            }
            console.log("matching data ",new_matching_data)
            setCart(new_matching_data)
           
        }
        
    },[bottle])

    // calculate the how much buy you Bottles
    const handleBottle=(details_Bottle)=>{
        const new_array=[...cart,details_Bottle]
        setCart(new_array)
        addToLs(details_Bottle.id)
       
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