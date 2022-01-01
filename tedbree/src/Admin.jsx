import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';



function Admin() {
    return (
        <div>
            <div className=' flex flex-col w-full bg-sky-900 py-11 relative'>
            <nav className='flex justify-around'>
                <div className="flex flex-col">
                    <h1 className="font-bold font-serif italic origin-bottom -rotate-12 text-2xl text-sky-100">FIND JOBS</h1>
                    <p className='text-sky-100 text-xs font-serif italic origin-bottom -rotate-4 ml-4 mt-1'>for employers</p>
                </div>
                <div className='flex'>
                    <NotificationsIcon style={{color: "white",  marginTop: 10 }}/>
                    <img  className='w-12 rounded-full ml-4' src="../assets/job2.jpg"/>
                </div>
            </nav>
            <div className="w-6/12 ml-64">
                <h1 className="text-white text-5xl font-bold mt-32 " >Job</h1>

            </div>
           
        </div>

            <div className='flex justify-around mt-10'>
                <div className='bg-white w-8/12 shadow-lg'>
                    <h1>Hello</h1>

                </div>

                <div>
                    <h1>Hello</h1>

                </div>
            </div>

        </div>
        
    )
}

export default Admin