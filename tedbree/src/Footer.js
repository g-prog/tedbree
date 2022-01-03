import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <div className='bg-sky-900 w-full py-20  flex flex-col md:flex  justify-center items-center md:justify-around'>
            <div className='flex flex-col mt-4 md:mt-0'>
                <h1 className="text-white font-bold font-serif italic origin-bottom -rotate-2 text-2xl text-sky-100">FIND JOBS</h1>
                <div className='flex'>
                    <CopyrightIcon style={{ fontSize: 20, marginTop: 30, color: "white"  }}/>
                    <p className='mt-7 ml-2 text-white'>2021</p>

                </div>
                

            </div>
            <div className='flex flex-col mt-4 md:mt-0'>
                <h1 className='text-white text-lg font-bold'>Quick links</h1>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>Home</p>
                </Link>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>About</p>
                </Link>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>Calendar</p>
                </Link>

                <Link to='/'>
                    <p className='text-white text-sm font-medium'>Terms and Conditions</p>
                </Link>


            </div>

            <div className='flex flex-col mt-4 md:mt-0'>
                <h1 className='text-white text-lg font-bold'>Quick links</h1>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>Home</p>
                </Link>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>About</p>
                </Link>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>Calendar</p>
                </Link>
                <Link to='/'>
                    <p className='text-white text-sm font-medium'>Terms and Conditions</p>
                </Link>


            </div>

            <div className='flex flex-col mt-4 md:mt-0'>
                <h1 className='text-white text-lg font-bold ml-4'>Social Media</h1>
                <div className='flex justify-between'>  
                    <div className='bg-sky-600 rounded-full px-2 py-0.5 mt-4 ml-4'>
                        <InstagramIcon  style={{ fontSize: 20, marginTop: 5, color: "white", marginLeft: 2}}/>
                        
                    </div>
                    <div className='bg-sky-600 rounded-full px-2 py-1.5 mt-4 ml-4'>
                        <FacebookIcon style={{ fontSize: 20, marginTop: 1, color: "white" }}/>
                        
                    </div>
                    <div className='bg-sky-600 rounded-full px-2 py-1 mt-4 ml-4'>
                        <TwitterIcon style={{ fontSize: 20, marginTop: 1, color: "white", marginLeft: 2  }}/>
                        
                    </div>

                </div>
                


            </div>
                  
            
        </div>
    )
}

export default Footer