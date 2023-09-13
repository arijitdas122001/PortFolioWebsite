import React from "react";
import "./topbar.css";
import logo from "../../assets/portfoliologo copy.jpg";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const topbar = (props) => {
  const { state, setstate } = props;
  return (
    <div className={"topbar " + (state && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <img src={logo} alt="logo" />
          </a>
          <div className="leftsub">
            <EmailIcon className="icon" />
            <span>arijitd@gmail.com</span>
          </div>
          <div className="leftsub">
            <CallIcon className="icon" />
            <span>+91 6295455828</span>
          </div>
        </div>
        <div className="download">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span class="material-symbols-outlined">file_open</span>
          <span><a href="https://drive.google.com/file/d/1jpvt_Wo1SlLnXpStZviKcBeq8l377b5-/view?usp=sharing" target="blank">My Resume</a></span>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setstate(!state);
              console.log("clicking");
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topbar;
