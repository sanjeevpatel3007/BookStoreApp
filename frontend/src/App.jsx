import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home'
// import Course from './components/Course'
import { Routes } from 'react-router-dom'
import Courses from './course/Courses';
import Signup from './signup/Signup';
export default function App() {
  return (
    <div className="bg-white h-96">
     
      {/* <Home />
      <Course /> */}

r<Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/Signup" element={<Signup/>} />
</Routes>

    </div>
  )
}
