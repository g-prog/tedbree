import React from "react";
import './jobcreation.css'

function JobApplication() {
  return (
   <div className="job">
        <div className="bg-cyan-50  w-11/12 md:w-6/12  flex flex-col justify-items-center px-6 py-7 rounded-sm">
            <div className="flex flex-col justify-items-center">
                <h3 className="text-sky-900 text-lg font-bold" >New Job</h3>
                

            </div>
            
            <form action="">
                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" > First Name </label>
                    <input className="bg-white w-full border-2 border-gray-300 mt-2 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Last Name</label>
                    <input className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Email address</label>
                    <input className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="email" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Location</label>
                    <input className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Phone Number</label>
                    <input className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="tel" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >CV</label>
                    <input className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="file"/>

                </div>

               

                
                <div className="mt-40 justify-items-center flex flex-col">
                    <button className="bg-sky-900 text-white py-3.5">Submit Application</button>

                </div>
                

                
                

            </form>
        </div>

   </div>
   
  );
}



export default JobApplication
