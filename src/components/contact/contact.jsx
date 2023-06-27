import React, { useState } from 'react'
import './contact.css'
import shakeimg from '../../assets/shake.svg'
const Contact = () => {
  const [message,setmessage]=useState(false)
  const handelclick=(e)=>{
    e.preventDefault();
    setmessage(true);
    setTimeout(() => {
      setmessage(false)
    }, 5000);
  }
  return (
    <div className='contact' id='contact'>
     <div className="leftcontact">
      <img src={shakeimg} alt="..." />
     </div>
     <div className="rightcontact">
      <h2>Contact.</h2>
      <form onSubmit={handelclick}>
        <input type="mail" placeholder='Write your Email'/>
        <textarea type="text" placeholder='Type Your Query'/>
        <button type="submit" onSubmit={handelclick}>Post a Query</button>
      </form>
      {message && <span>I will Reply ASAP :)</span>}
     </div>
    </div>
  )
}

export default Contact
