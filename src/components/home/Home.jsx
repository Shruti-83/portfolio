import React from 'react'
import "./home.css";
import Me from "../../assets/profileMe2.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} className='home_img' alt="" />
        <h1 className="home_name">Shruti </h1>
          <span className="home_education">I'm a Frontened Developer</span>
        <HeaderSocials/>

        <a href="#contact" className="btn">
          Hire Me
        </a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home