import React from "react";
import { useState, useEffect } from "react"
import './home.css'
import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import Axios from 'axios'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const endpoint = `https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree`
function Jobs() {

    const [job, setJob] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const[isLoading, setIsLoading] = useState(true)
  
    const fetchJob = async () => {
      const res = await fetch(endpoint)
      const data = await res.json()
      setJob(data)
      setIsLoading(false)
    }
  
    useEffect(() => {
      fetchJob()
    })
  
    const searchJob = (searchValue) => {
      setSearchInput(searchValue)
  
      if (searchInput) {
        const filteredSearch = job.filter((user) =>
          Object.values(user)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
        setFiltered(filteredSearch)
      } else {
        setFiltered(job)
      }
    }
  
    
  
  
  
  useEffect(() => {
    const { data } = Axios.get('https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree',
    {
      
    });
  
    console.log(data)   
    }, []);
    
    

    
  return (
  
   <div >
      <div className="flex justify-center items-center">
        <input  className=" w-6/12 bg-white border-2 border-gray-200  mt-20 shadow-md p-4" type="text" name="text"id="text" placeholder="Search vacancies..." onChange={(e) => searchJob(e.target.value)}/>
        
       
    
        </div>
        {isLoading ? <h1 className="h-screen text-4xl mt-80 ml-80">Loading data from the API, please wait...</h1>:<div className="py-28 ">
        <div className='flex justify-center items-center'>
          
          <p className='mt-2 font-semibold text-sm'>Showing {job.length} results</p>
          <div className='flex mt-2 ml-28'>
            <p className='text-gray-500 font-semibold text-sm'>Sort by:</p>
            <div className='flex '>
              <p className='font-semibold text-sm ml-2'>Latest</p>
              <KeyboardArrowDownIcon style={{ marginTop: 2, fontSize: 20}}/>
            </div>
          </div>
        </div>
        {searchInput && searchInput.length > 1 
        ? filtered && filtered.map(({ id, title, salary, Location, bio}) => (
            <div className="flex flex-col justify-items-center  items-center">
            <Link to={`/jobs/${id}`}>
              <div  key={id}>
                <Card
                title={title}
                description={bio}
                price={salary}
                location={Location}
                  
                />
        
              </div>
          </Link>

      </div>
          
             
                
        
          
          
        ))
        
      :job && job.map(({ id, title, salary, Location, bio}) => (
       
        <div className="flex flex-col justify-items-center  items-center">
            <Link to={`/jobs/${id}`}>
              <div  key={id}>
                <Card
                 title={title}
                 description={bio}
                 price={salary}
                 location={Location}
                  
                />
         
              </div>
         </Link>

        </div>
            
            
         
         
         ))}
</div>
} 
  <Footer/>
</div>
   
  );
}



export default Jobs
