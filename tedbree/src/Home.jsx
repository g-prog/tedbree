import React from "react";
import { useState, useEffect } from "react"
import './home.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Card from './Card';
import Axios from 'axios'


const endpoint = `https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree`
function Home() {

    const [destination, setDestination] = useState([])
    const [filtered, setFiltered] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const[isLoading, setIsLoading] = useState(true)
  
    const fetchDestination = async () => {
      const res = await fetch(endpoint)
      const data = await res.json()
      setDestination(data)
      setIsLoading(false)
    }
  
    useEffect(() => {
      fetchDestination()
    })
  
    const searchDestination = (searchValue) => {
      setSearchInput(searchValue)
  
      if (searchInput) {
        const filteredSearch = destination.filter((user) =>
          Object.values(user)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
        setFiltered(filteredSearch)
      } else {
        setFiltered(destination)
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
       
       <div className="w-full bg-sky-900 py-11 relative">
       
       <div className="flex flex-col ">
            <nav>
                <div className="logo">
                    <h1 className="text-white font-bold font-serif italic origin-bottom -rotate-12 text-2xl text-sky-100">FIND JOBS</h1>
                </div>
                <div className="flex">
                    <ul className="flex">
                        <li className="text-white  ml-10 font-bold ">Jobs</li>
                        <li className="text-sky-100  ml-10">Company Review</li>
                        <li className="text-sky-100  ml-10">Find Salaries</li>
                        
                    </ul>
                    <Link to='/create'><button className="text-white  ml-14 bg-white py-1.5 px-1.5 rounded"><p className="text-sky-900 text-xs font-bold">Post jobs</p></button></Link>
                </div>
            </nav>
            <div className="flex mt-28 ml-72">
                <div className="w-6/12">
                    <h1 className="text-white text-5xl font-medium mt-32" >Find Your Dream Job</h1>

                </div>
                
                <div className="ml-32">
                    <img className="w-10/12 " src="../assets/smiling.png" alt="smiling man" />
                </div>
               

            </div>
       </div>
       <div className="flex bg-white absolute mt-0 ml-56 w-8/12 py-5  rounded">
            <div className="ml-7">
                <SearchIcon style={{color: "turquoise",  marginTop: 10 }}/>
            </div>
           <input  className="ml-7" type="text" name="text"
            id="text"  onChange={(e) => searchDestination(e.target.value)}/>
           <div className="flex ml-10">
                <div className="line">
                    
               </div>
                <div className="ml-10">
                    <FmdGoodIcon style={{color: "turquoise", marginTop: 10 }}/>
               </div>
               <input type="text" className="ml-10"/>
                <button className="bg-rose-500 py-1.5 px-4 rounded-md ml-1"><p className="text-white">Search</p></button>
            </div> 
       </div>
    
   </div>
   {isLoading ? <h1 className="h-screen text-4xl mt-80 ml-80">Loading data from the API, please wait...</h1>:<div className="bg-sky-200 py-28 ">
        {searchInput && searchInput.length > 1 
        ? filtered && filtered.map(({ id, title, salary, location, bio}) => (
              <div  key={id}>
                <Card
                    title={title}
                    description={bio}
                    price={salary}
                    location={location}
                  
                />
         
              </div>
                
        
          
          
        ))
        
      :destination && destination.map(({ id, title, salary, location, bio}) => (
        <div className="flex flex-col justify-items-center items-center">
            <Link to={`/jobs/${id}`}>
              <div  key={id}>
                <Card
                 title={title}
                 description={bio}
                 price={salary}
                 location={location}
                  
                />
         
              </div>
         </Link>

        </div>
            
            
         
         
         ))}
       

    



</div>
} 
   
   </div>
   
  );
}



export default Home
