import React from 'react';
import Comman from './Comman';
import web2 from './parallax1.jpg'

const About = () => {
  return (
    <>
      <Comman header='Welcome To About Page' imgsrc={web2} visit='/contact' btn='Contact Now' />
    </>
  )
}

export default About;
