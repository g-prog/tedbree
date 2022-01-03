import React from "react";
import { useState, useEffect } from "react"
import './home.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from './Footer';
import Axios from 'axios'


const endpoint = `https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree`
function Home({menuOpen, setMenuOpen}) {
  
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
      const changeWidth = () => {
          setScreenWidth(window.innerWidth);
      }

      window.addEventListener('resize', changeWidth)

      return () => {
          window.removeEventListener('resize', changeWidth)
      }

  }, [])


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
  
   <div>
     
      <div className="w-full bg-sky-900 py-2 md:py-11 relative">
       <div className="flex flex-col ">
       <nav className="bg-sky-900 flex py-4 px-4 justify-between md:justify-around sticky top-0 w-full">
           <div className="logo">
              <h1 className="text-white font-bold font-serif italic origin-bottom -rotate-12 text-2xl text-sky-100">FIND JOBS</h1>
            </div>
           {(toggleMenu || screenWidth > 500) && (
               <div className="flex">
               <ul className="list">
                     <Link to='/jobs'><li className="text-white  md:ml-10 text-sm font-bold hover:text-sky-400 hover:font-bold">Jobs</li></Link>
                     <Link to='/admin'><li className="text-sky-400 mt-4 md:mt-0 text-sm md:ml-10 hover:text-white hover:font-bold">Admin</li></Link>
                     <Link to='/login'><li className="text-sky-400 text-sm md:mt-0 mt-4 md:ml-10 hover:text-white hover:font-bold">Login</li></Link>
                     <Link to='/'><li className="text-sky-400 text-sm mt-4 md:mt-0 md:ml-10 hover:text-white hover:font-bold">Find Salaries</li></Link>  
                     <Link to='/create'><button className="text-white mt-4 md:mt-0 md:ml-14 bg-white hover:text-white py-1.5 hover:font-bold px-1.5 rounded"><p className="text-sky-900 text-xs font-bold">Post jobs</p></button></Link>
               </ul>
               
           </div>
               

           )}
            
            
            <div className="hamburger">
                <MenuIcon  onClick={toggleNav}style={{color: "white" }}/>
            </div>

    </nav>
        
            <div className="flex  mt-4 md:mt-28  ml-4 md:ml-72">
              <div className=" w-full md:w-6/12">
                <h1 className="text-white text-2xl md:text-5xl font-bold mt-32" >Find Your Dream Job</h1>
              </div>
                
              <div className=" hidden md:ml-32 md:block">
                <img className="w-10/12 " src="../assets/smiling.png" alt="smiling man" />
             </div>
            </div>
       </div>
       <div className="flex bg-white mt-10  md:absolute mt-0 md:ml-56 md:w-8/12 md:py-5  rounded shadow-2xl">
            <div className="ml-7">
              <SearchIcon style={{color: "turquoise",  marginTop: 10 }}/>
            </div>
           <input  className="ml-7" type="text" name="text"id="text" placeholder="Search vacancies..." onChange={(e) => searchJob(e.target.value)}/>
           <div className="flex ml-10">
                <div className="line">
                    
               </div>
                <div className=" ml-10">
                  <FmdGoodIcon style={{color: "turquoise", marginTop: 10 }}/>
               </div>
               <input type="text" className="ml-10"  name="text"id="text" placeholder="Search locations" onChange={(e) => searchJob(e.target.value)}/>
                <button className="bg-rose-500 py-1.5 px-4 rounded-md ml-1"><p className="text-white text-sm">Search</p></button>
            </div> 
       </div>
    
   </div>
   {isLoading ? <h1 className="h-screen text-4xl mt-80 ml-80">Loading data from the API, please wait...</h1>:<div className="bg-sky-100  py-28 ">
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



export default Home
