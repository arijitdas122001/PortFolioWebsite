import React, { useState } from 'react'
import './samples.css'
import ecommerce from '../../assets/ecommerce.webp'
import blogweb from '../../assets/blogweb.jpg'
import travel from '../../assets/travel.avif'
import arrow from '../../assets/arrow.png'
const samples = () => {
    // eslint-disable-next-line
    const [slider,setslider]=useState(0);
    const items=[
      {
      id: "1",
      icon: ecommerce,
      title: "Ecommerce",
      desc:
        "Online Fashion Website Made with MERN Stack with many Feaures like shopping,adding to cart,bill payment,sign up,log-in ,logout",
      link:'https://woocommerce-khaki.vercel.app/',
      git:'https://github.com/arijitdas122001/woocommerce',
      tags:['ReactJs','ExpressJs','NodeJs','MongoDB','Javascript','Redux','Stripe-payments','Html','css'],
    },
    {
      id: "2",
      icon: travel,
      title: "TravelPedia",
      desc:
        "Simplifying Hotel Bookings for Travel Enthusiasts Excited to showcase my latest project, TravelPedia, a user-friendly full-stack travel booking website built with the 𝐌𝐄𝐑𝐍 stack",
      link:'https://react-travelpedia.vercel.app/',
      git:'https://github.com/arijitdas122001/React-Travelpedia',
      tags:['ReactJs','ExpressJs','NodeJs','MongoDB','Javascript','Redux','Razorpay-payments','Html','css'],
    },
    {
      id: "3",
      icon:blogweb,
      title: "Blog App",
      desc:
        "I'm excited to introduce my new project, a dynamic Blogging app built with Next.js. This platform empowers users to create, interact with, and explore a wide variety of blogs",
      link:'https://blogswell.vercel.app/',
      git:'https://github.com/arijitdas122001/NextJsBlog',
      tags:['NextJs','MongoDB','Zod','Clodinary','Typescript','Next-Auth','Tailwind-css'], 
    },
  ];
  const handleclick=(curarrow)=>{
    curarrow === "left"
    ? setslider(slider > 0 ? slider - 1 : 2)
    : setslider(slider < items.length-1 ? slider + 1 : 0);
  }
  return (
    <div className='samplesection' id="samples">
      <div className="slider" style={{transform:`translateX(-${slider * 100}vw)`}}>
        {
          items.map((ele,i)=>{
        return <div className="scontainer" key={i}>
          <div className="sitem">
          <div className="sleft">
            <div className="leftcontainer">
              <div className="imagecontainer">
              <img src={ele.icon} alt="..." />
              </div>
              <h4>{ele.title}</h4>
              <p className='para'>{ele.desc}</p>
            </div>
          </div>
          <div className="sright">
            <div className="sright-nested1">
            <button className='rightbtns'><a href={ele.link} target='blank'>Check Out The Website</a></button>
            <button className='rightbtns'><a href={ele.git} target='blank'>Check Out GitHub</a></button>
            </div>
            <div className="sright-nested2">
              {ele.tags.map((ele)=>(
              <div className="sright-tags">{ele}</div>
            ))}
            </div>
          </div>
          </div>
        </div>
        })
      }    
      </div>
      <img src={arrow} alt=".." className='Arrow aleft' onClick={()=>handleclick("left")} />
      <img src={arrow} alt=".." className='Arrow aright' onClick={()=>handleclick("right")}/>
      </div>
  )
}

export default samples
