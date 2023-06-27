import './intro.css'
import Logo from '../../assets/intropagelogo.png'
import Typed from 'typed.js';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
const Intro = () => {

const textref=useRef();
  useEffect(() => {
    const typed = new Typed(textref.current, {
      strings: ['Coding Enthusiast', 'Web Developer','Learner','Student'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className='introsection' id='intro'>
      <div className="left">
        <div className="imgcontainer">
        <img src={Logo} alt="Logo"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div>
        <h2>Hi There, I'm</h2>
          <h1>Arijit Das</h1>
          <h3>
            A <span ref={textref}> </span>
          </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro

