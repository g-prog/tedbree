import React from "react";
import { useState, useEffect } from "react"
import './home.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Card from './Card';
import Axios from 'axios'


function Home() {
    const [data, setData] = useState([])
    useEffect(()=>{
        Axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
            const responseData = res.data;
            setData(responseData);
        })
        .catch(err=> {
            console.log(err)

        })
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
           <input  className="ml-7" type="text" />
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
   
            {data.map ((each)=>(
                <div className="bg-sky-200 py-28 ">
                    <div className="flex flex-col justify-items-center items-center"  key={data.id}>
                        <Card
                         title={each.title}
                         description={each.body}
                         price="3k-5k"
                         location="Yaba, Lagos"
                        />
                    </div>
                </div>
                                    
                                    
                                  
            )) }
   </div>
   
  );
}



export default Home
