import React, { useState } from 'react'
import './samples.css'
import ecommerce from '../../assets/ecommerce.webp'
import portlogo from '../../assets/portlogo.png'
import blogweb from '../../assets/blogweb.jpg'
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
      git:'https://github.com/arijitdas122001/woocommerce'
    },
    {
      id: "2",
      icon: portlogo,
      title: "PortFolio Website",
      desc:
        "Own ProtFolio Website Made with ReactJs where one can find all details about me with a taste of good Ui and smooth experience",
      link:'https://my-protfolio-psi.vercel.app/',
      git:'https://github.com/arijitdas122001/portfolioWebsite'
    },
    {
      id: "3",
      icon: blogweb,
      title: "Blog WebSite",
      desc:
        "Online Blog Website Made with HTML,CSS,JS which is a realtime blog writring website where u can share u thoughts thorugh blogs and it is intregrated with DataBase(MongoDb) by which Blogs are updated Realtime,Usercan also Log-in and Log-out",
      link:'#',
      git:'https://github.com/arijitdas122001/Blog-Website'
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
            <button className='rightbtns'><a href={ele.link} target='blank'>Check Out The Website</a></button>
            <button className='rightbtns'><a href={ele.git} target='blank'>Check Out GitHub</a></button>
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
