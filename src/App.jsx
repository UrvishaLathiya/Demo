import React from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/service' Component={Service} />
        {/* <Redirect to='/' /> */}

      </Routes>
      

    </> 
  )
}

export default App;
