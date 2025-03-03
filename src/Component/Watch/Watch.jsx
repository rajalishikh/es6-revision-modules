import React from 'react';
import { add, multiplication } from '../../Utility/calculate';
import './Watch.css';

const Watch = () => {
    const first_value=12;
    const second_value=33;
    const multiplication_two_number=multiplication(first_value,second_value)
    const add_two_number=add(first_value,second_value);

    return (
        <div className='border_name'>
            <h1>Watch section</h1>
            <p>Total watch{multiplication_two_number}</p>
            <p>Add number{add_two_number}</p>
            
        </div>
    );
};

export default Watch;