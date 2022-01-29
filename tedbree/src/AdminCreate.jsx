import React, { useState } from "react";
import './jobcreation.css'
import Axios from 'axios';






function AdminCreate() {
    const url = "https://61cf24aa65c32600170c7ebd.mockapi.io/tedbree"
    const [data, setData] = useState({
      title:"",
      salary:""
      
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
          title: data.title,
          salary: data.salary
          
          

    
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
            
            
            <form onSubmit={(e)=> submit(e)}>
                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" > Title </label>
                    <input onChange={(e)=>handle(e)} id="name" value={data.title}className="bg-white w-full border-2 border-gray-300 mt-2 rounded-md py-1" type="text" />

                </div>

                <div className="flex flex-col mt-14 justify-items-center">
                    <label className=" text-sky-900 text-sm font-bold" >Email</label>
                    <input onChange={(e)=>handle(e)} id="email" value={data.salary}className="bg-white w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="email" />

                </div>

               
                <div className="mt-40 justify-items-center flex flex-col">
                    <button className="bg-sky-900 text-white py-3.5">Add User</button>

                </div>
                

                
                

            </form>
        </div>

   </div>
   
  );
}



export default AdminCreate
