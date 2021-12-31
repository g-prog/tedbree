import React from "react";
import useFetch from './useFetch'
import { useParams } from 'react-router'


function JobDetails() {
    const { id} = useParams();
    const { loading, error, data} = useFetch('https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree/' + id)
    
   if(loading) return <p>loading...</p>
   if(error) return <p>Error...</p>
   console.log(data)
  return (
   <div className="job">
        
        <h1>{data.description}</h1>

   </div>
   
  );
}



export default JobDetails

