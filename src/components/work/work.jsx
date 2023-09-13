import React from 'react'
import './work.css'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
const work = () => {
  return (
    <div className='work' id="work">
        <h1>PROFILES</h1>
      <div className="wrapper">
      <div className="card" style={{width: "18rem" ,height:"20rem",}}>
  <img src={p1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Visit My LeetCode Profie</p>
  </div>
  <a href="https://leetcode.com/arijit__12/" target='_blank' rel="noreferrer"><button>Visit Here</button></a>
</div>
      <div className="card" style={{width: "18rem" ,height:"20rem"}}>
  <img src={p2} className="card-img-top" alt="..." style={{height:"10rem"}}/>
  <div className="card-body">
    <p className="card-text">Visit My GeeksForGeeks Profile</p>
  </div>
  <a href="https://auth.geeksforgeeks.org/user/aribwnlvpgbwn/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target='_blank' rel="noreferrer"><button>Visit Here</button></a>
</div>
      <div className="card" style={{width: "18rem" ,height:"20rem"}}>
  <img src={p3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Visit My LinkedIn Profile</p>
  </div>
  <a href="https://www.linkedin.com/in/arijit-das-3a5944208/" target='_blank' rel="noreferrer"><button>Visit Here</button></a>
</div>
      <div className="card" style={{width: "18rem" ,height:"20rem"}}>
  <img src={p4} className="card-img-top" alt="..." style={{height:"10rem"}}/>
  <div className="card-body">
    <p className="card-text">Visit My GitHub Profile</p>
  </div>
  <a href="https://github.com/" target='_blank' rel="noreferrer"><button>Visit Here</button></a>
</div>
</div>
    </div>
  )
}

export default work
