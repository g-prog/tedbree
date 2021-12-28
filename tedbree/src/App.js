import React from 'react';
import JobCreation from './JobCreation'
import JobApplication from './JobApplication'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h3 className="text-sky-900 text-lg font-bold" >New Job</h3>


      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobCreation />}/>
        </Routes>

        <Routes>
          <Route path="/apply" element={<JobApplication />}/>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
