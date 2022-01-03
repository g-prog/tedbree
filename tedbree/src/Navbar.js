import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';






function Navbar() {
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
    
  return (
       <nav className="bg-sky-900 flex py-4 px-4 justify-between md:justify-around fixed top-0 w-full">
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
        
        


   
  );
}



export default Navbar
