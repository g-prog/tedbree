import React from 'react';
import JobCreation from './JobCreation'
import JobApplication from './JobApplication'
import Home from './Home'
import JobDetails from './JobDetails'
import Admin from './Admin'
import Jobs from './Jobs'
import Menu from './Menu'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import AdminCreate from './AdminCreate';
import { useState } from "react";

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<JobCreation />}/>
        </Routes>
        <Routes>
          <Route path="/nav" element={<Navbar />}/>
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}/>
        </Routes>
        <Routes>
          <Route exact path="/menu" element={<Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}/>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path="/apply" element={<JobApplication />}/>
        </Routes>
        <Routes>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
        <Routes>
          <Route path="/jobs" element={<Jobs />}/>
        </Routes>

        <Routes>
          <Route path="/admin-create" element={<AdminCreate />}/>
        </Routes>
        
        <Routes>
          <Route path="/jobs/:id" element={<JobDetails />}/>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
