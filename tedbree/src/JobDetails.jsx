import React from "react";
import useFetch from './useFetch'
import { useParams } from 'react-router'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom';





function JobDetails() {
    const { id} = useParams();
    const { loading, error, data} = useFetch('https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree/' + id)
    
   if(loading) return <p>Loading data from the API, please wait...</p>
   if(error) return <p>Error, kindly check your internet connectivity...</p>
   console.log(data)
  return (
   <div className="flex flex-col p-10">
        <h1 className='text-sky-900 font-bold text-2xl'>{data.title}</h1>
        <div className='flex mt-4'>
           <FmdGoodIcon style={{color: "turquoise"}}/>
           <p className='ml-2'>{data.Location}</p>
        </div>
        <div className='mt-10'>
          <Link to='/apply'>
               <button className='bg-sky-900 text-white w-60 py-2 px-10 rounded-md'>Apply via Find Job</button>

          </Link>
          <hr className="w-full mt-10 border-1 border-rose-500"/>

        </div>
        
        
        <div className='mt-20'>
          <p className='font-bold text-sky-900'>Job Description/Requirements</p>
          <div className='mt-10 flex flex-col' >
               <li>{data.description}</li>
               <li className='mt-4'>{data.description2}</li>
               <li className='mt-4'>{data.description3}</li>
               <li className='mt-4'>{data.description4}</li>
              
          </div>

          

        </div>
        

   </div>
   
  );
}



export default JobDetails

