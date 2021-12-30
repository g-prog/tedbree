import React from 'react';
import './Card.css'

function Card({title, description, price}) {
    return (
        <div className='bg-white w-6/12 py-7 px-14 rounded-md mt-10 flex flex-col'>
            <div className='flex justify-between'>
                <h1 className='text-sky-900 font-bold'>{title}</h1>
                <p className='text-sky-900 font-bold '>{price}</p>
            </div>
            
            <h1>{description}</h1>

            
        </div>
    )
}

export default Card