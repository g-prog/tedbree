import React from "react";
import './login.css'

function Login() {
    return (
        <div className='flex h-screen'>
            <div className='bg'> 
                <div className='flex flex-col'>
                    <div className="flex flex-col">
                        <h1 className="text-white font-bold font-serif italic origin-bottom -rotate-12 text-2xl text-sky-100">FIND JOBS</h1>
                        <p className='text-sky-100 text-xs font-serif italic origin-bottom -rotate-4 ml-4 mt-12'>for employers</p>
                    </div>

                    <div className="">
                        <h1 className="text-white text-4xl font-bold mt-20">Find the best  <br/>candidates for your organization.</h1>
                    </div>

                    <div className="">
                        <img className="w-8/12 mt-8 h-64" src="../assets/smiling.png" alt='background'/>
                    </div>
                </div>
            </div>
            <div className="bg-sky-50 p-20 md:p-36 w-full justify-center">
                <form>
                    <div className="flex flex-col md:mt-0 lg:mt-14 justify-items-center">
                        <label className=" text-sky-900 text-sm font-bold" > Email</label>
                        <input  id="name" className="bg-white  w-fit md:w-full border-2 border-gray-300 mt-2 rounded-md py-1" type="email" />

                    </div>

                    <div className="flex flex-col md:mt-2  lg:mt-14 justify-items-center">
                        <label className=" text-sky-900 text-sm font-bold" >Password</label>
                        <input  id="email" className="bg-white w-fit md:w-full border-2 border-gray-300 mt-4 rounded-md py-1" type="password" />

                    </div>

                
                    <div className="mt-10 md:mt-4 lg:mt-40 justify-items-center flex flex-col">
                        <button className="bg-sky-900 text-white py-3.5">Login</button>

                    </div>
                    

                    
                    

                </form>
            </div>
           
            
        </div>
    )
}
export default Login
