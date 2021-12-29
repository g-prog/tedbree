import React from 'react';
import JobCreation from './JobCreation'
import JobApplication from './JobApplication'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">



      
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
