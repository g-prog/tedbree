import React from 'react';
import './Card.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';


function Card({title, description, price, location}) {
    return (
        <div className='bg-white w-full py-7 px-14 rounded-md mt-10 flex flex-col shadow-2xl'>
            <div className='flex justify-evenly '>
                <h1 className='text-sky-900 font-bold text-lg '>{title}</h1>
                <p className='text-sky-900 font-bold text-lg '>${price}</p>
            </div>
            <div className='flex mt-2 ml-9'>
                <div>
                    <FmdGoodIcon style={{color: "turquoise", fontSize : 18 }}/>
                </div>
                <div >
                    <p className='text-sm mt-1 ml-1'>{location}</p>

                </div>
                

            </div>
            <div className='mt-5 ml-9'>
                <p className='text-xs text-justify '>{description}</p>

            </div>

            <div className='mt-5 ml-60'>
                <button className='text-sm bg-rose-500  text-white py-1.5 px-2 rounded-md w-24'>See more</button>
               
            </div>

            

            
        </div>
    )
}

export default Card