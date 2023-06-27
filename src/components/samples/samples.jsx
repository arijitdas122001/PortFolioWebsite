import React, { useState } from 'react'
import './samples.css'
import blogweb from '../../assets/blogweb.jpg'
import portlogo from '../../assets/portlogo.png'
import notebook from '../../assets/notebook.jpg'
import arrow from '../../assets/arrow.png'
const samples = () => {
    // eslint-disable-next-line
    const [slider,setslider]=useState(0);
    const items=[
      {
      id: "1",
      icon: blogweb,
      title: "Blog Website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: "2",
      icon: portlogo,
      title: "PortFolio Website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "3",
      icon: notebook,
      title: "Notes Taking Site",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
              <p>{ele.desc}</p>
            </div>
          </div>
          <div className="sright">
            <button className='rightbtns'>Check Out The Website</button>
            <button className='rightbtns'>Check Out In GitHub</button>
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
