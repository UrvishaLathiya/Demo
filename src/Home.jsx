import React from 'react';
import './index.css';
import Comman from './Comman';
import web from '../src/about-img.png';

const Home = () => {
  return (
    <>
      <Comman header = 'Grow your business with' imgsrc = {web} visit='/service' btn='Get Started' />
    </>
  )
}

export default Home;
