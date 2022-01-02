import React from "react";
import "./menu.css"
import { Link } from 'react-router-dom';

function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className= {"menu " +(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/jobs'>Jobs</Link>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/admin'>Admin</Link>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/login'>Login</Link>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <Link to='/'>Find Salaries</Link>
                </li>

                <button onClick={()=>setMenuOpen(false)}>
                    <Link to='/create'>Post Jobs</Link>
                </button>

               
            </ul>
           
            
        </div>
    )
}
export default Menu
