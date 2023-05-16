import React from "react";
import { Routes, Route } from 'react-router-dom';
import { SignUp, Login, Home } from "./pages";
import {Navbar } from './components';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' exact element={<SignUp/>} />
        <Route path='/login' exact element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
