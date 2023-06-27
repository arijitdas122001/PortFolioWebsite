import React from 'react'
import "./topbar.css";
import logo from '../../assets/portfoliologo copy.jpg'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const topbar = (props) => {
  const {state,setstate}=props;
  return (
    <div className={'topbar ' +(state && 'active')} id='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro"><img src={logo} alt="logo"/></a>
          <div className="leftsub">
           <EmailIcon className='icon'/>
           <span>arijitd@gmail.com</span>
           </div>
          <div className="leftsub">
           <CallIcon className='icon'/>
           <span>+91 6295455828</span>
           </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>{
            setstate(!state);
            console.log('clicking')
          }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default topbar
