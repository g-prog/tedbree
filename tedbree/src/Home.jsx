import React from "react";
import './home.css'

function Home() {
  return (
   <div className="w-full bg-sky-900 py-11 pb-48 relative">
       <div className="flex flex-col">
            <nav>
                <div className="logo">
                    <h1 className="text-white font-bold italic origin-bottom -rotate-12 text-lg text-sky-100">FIND JOBS</h1>
                </div>
                <div className="flex">
                    <ul className="flex">
                        <li className="text-white  ml-10 font-bold ">Jobs</li>
                        <li className="text-sky-100  ml-10">Company Review</li>
                        <li className="text-sky-100  ml-10">Find Salaries</li>
                    </ul>
                    <button className="text-white  ml-14 bg-white py-1.5 px-1.5 rounded"><p className="text-sky-900 text-xs font-bold">Post jobs</p></button>
                </div>
            </nav>
            <div className="flex mt-28 ml-72">
                <h1 className="text-white text-4xl" >Find your dream Job</h1>
            </div>
       </div>
       <div className="flex bg-white absolute mt-40 ml-96 w-6/12 py-5 rounded">
           <input type="text" />
           <div className="flex">
               <input type="text" className="ml-10"/>
                <button className="bg-rose-500 py-1.5 px-4 rounded-md ml-28"><p className="text-white">Search</p></button>
         </div>
             
       </div>
   </div>
   
  );
}



export default Home
