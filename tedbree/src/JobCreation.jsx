import React, { useState } from "react";
import './jobcreation.css'
import Axios from 'axios';






function JobCreation() {
    const url = "https://api.jobboard.tedbree.com/v1"
    const [data, setData] = useState({
      Title:"",
      Company:"",
      Location:"",
      EmploymentType:"",
      Salary:"",
      Deadline:"",
      Category:""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
          Title: data.Title,
          Company: data.Company,
          Location: data.Location,
          Salary: data.Salary,
          Deadline: data.Deadline
          

    
        })
        .then(res=>{
          console.log(res.data)
        })
    
      }


      function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    
      }
  return (
   <div className="job">
        <div className="bg-cyan-50  w-11/12 md:w-6/12  flex flex-col justify-items-center px-6 py-7 rounded-sm">
            <div className="flex flex-col justify-items-center">
                <h3 className="text-sky-900 text-lg font-bold" >New Job</h3>
                <p className="text-gray-500 text-xs mt-2 w-full" >Kindly provide the required information to get matched with suitable candidates</p>

            </div>
            
            <form onSubmit={(e)=> submit(e)}>
                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" > Job Title </label>
                    <input onChange={(e)=>handle(e)} id="Title" value={data.Title}className="bg-white w-full border-2 border-gray-300 mt-2 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Company Name</label>
                    <input onChange={(e)=>handle(e)} id="Company" value={data.Company}className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Location</label>
                    <input onChange={(e)=>handle(e)} id="Location" value={data.Location}className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label  className=" text-sky-900 text-sm font-bold" >What type of employment is it ?</label>
                    <select onChange={(e)=>handle(e)}  value={data.EmploymentType}id="employment" className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" placeholder="select option">
                        <option value="">Full-time</option>
                        <option value="">Temporary</option>
                        <option value="">Contract</option>
                        <option value="">Permanent</option>
                        <option value="">Internship</option>
                        <option value="">Volunteer</option>
                    </select>

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Salary Range</label>
                    <input onChange={(e)=>handle(e)} id="Salary" value={data.Salary}className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Submission deadline</label>
                    <input onChange={(e)=>handle(e)} id="Deadline" value={data.Deadline}className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="text" />

                </div>


                <div className="flex flex-col mt-14 justify-items-center">
                    <label  className=" text-sky-900 text-sm font-bold" >What sector is this job categorized ?</label>
                    <select onChange={(e)=>handle(e)}  value={data.Category}id="employment" className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1">
                        <option value="">Tech</option>
                        <option value="">Healthcare</option>
                        <option value="">Hospitality</option>
                        <option value="">Customer Service</option>
                        <option value="">Marketing</option>
                    </select>

                </div>

                <div className="mt-40 justify-items-center flex flex-col">
                    <button className="bg-sky-900 text-white py-3.5">Submit Application</button>

                </div>
                

                
                

            </form>
        </div>

   </div>
   
  );
}



export default JobCreation
