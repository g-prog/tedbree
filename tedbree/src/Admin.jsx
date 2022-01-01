import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';





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
                    <img  className='w-12 rounded-full ml-4' src="../assets/job2.jpg" alt='logo'/>
                </div>
            </nav>
            <div className="w-6/12 ml-80">
                <h1 className="text-white text-5xl font-bold mt-32" >Job</h1>

            </div>
           
        </div>

            <div className='flex justify-around mt-10'>
                <div className=' flex justify-around bg-white w-4/12 shadow-lg py-2 rounded-md'>
                    <SearchIcon style={{color: "turquoise",  marginTop: 10 }}/>
                    <input className='ml-4'/>
                    <button className="bg-rose-500 py-1 px-4 rounded-md ml-1"><p className="text-white">Search</p></button>
                </div>

                <button className='bg-rose-500 flex py-1.5 px-2 rounded-lg'>
                    <AddIcon style={{color: "white", marginTop: 10 }}/>
                    <p className='text-white mt-2'>New Job</p>

                </button>
            </div>

            <div className='flex bg-sky-900 w-11/12 mt-10 ml-10 rounded-md py-2 px-2 justify-around'>
                <div className='text-white'>Job Title</div>
                <div className='text-white'>Date Modified</div>
                <div className='text-white'>Candidates</div>
                <div className='flex'>
                    <p className='text-white'>Filter</p>
                    <FilterAltIcon  style={{color: "white", marginLeft: 5 }}/>
                </div>

            </div>


            <div className='flex  bg-white shadow-lg w-11/12 ml-10 mt-4 py-4'>
                <div><RadioButtonCheckedIcon style={{color: "crimson", marginLeft: 5 }}/></div>
                <div className='ml-10'>Customer success Intern</div>
                <div className='ml-48'>12/10/22</div>
                <div className='ml-72'>50</div>
                <button className='bg-rose-500 text-white w-20 rounded ml-40'>Edit</button>
                <button className='border-2 border-cyan-400 text-cyan-400 py-1 px-2 ml-20'>Delete</button>

            </div>

        </div>
        
    )
}

export default Admin