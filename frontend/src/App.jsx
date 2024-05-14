// import React from 'react'
// import "./App.css"
// import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
// import Home from './home/Home'
// import { Routes } from 'react-router-dom'
// import Courses from './course/Courses';
// import Signup from './signup/Signup';
// import  { Toaster } from 'react-hot-toast';
// import About from './about/About';
// import Contact from './contact/Contact';
// import { useAuth } from './context/AuthProvider';
// import { ThemeProvider } from './context/ThemeContext';
// import ToggleButton from './context/ToggleButton';

// export default function App() {
  
// const [authUser,setAuthUser]=useAuth();
// console.log(authUser);

//   return (
//     <ThemeProvider>
//           <ToggleButton/>
//     <div className="bg-white h-96">
// <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/course"  element={authUser?<Courses/>: <Navigate to="/Signup" />}      />
//       <Route path="/Signup" element={<Signup/>} />
//       <Route path="/about" element={<About/>} />
//       <Route path="/contact" element={<Contact/>} />
// </Routes>
// <Toaster />

//     </div>
//     </ThemeProvider>
//   )
// }


import React from "react";
import Home from "./home/Home";
import About from './about/About';
import Contact from './contact/Contact';

import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />

        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
