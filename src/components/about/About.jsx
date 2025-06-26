import React from 'react'
import "./about.css";
import Image from "../../assets/profileMe1.jpg"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container" id="about">
      <h2 className="section_title">
        About Me
      </h2>
      <div className="about_container grid">
           <img src={Image} alt="" className="about_img" />
           <div className="about_data grid">
            <div className="about_info">
              <p className='about_description'>I'm a frontend developer skilled in HTML, CSS, JavaScript, and React. I enjoy building clean, responsive web interfaces and turning ideas into functional products. Currently open to internship opportunities to grow and contribute to real-world projects.</p>
              <a href="" className='btn'>Download CV</a>
            </div>

            <div className="about_skills grid">
              <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">Development</h3>
                  <span className="skills_number ">90%</span>
                </div>

                <div className="skills_bar">
                  <span className="skills_percentage development"></span>
                </div>
              </div>

               <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">UI UX Design</h3>
                  <span className="skills_number ">80%</span>
                </div>

                <div className="skills_bar">
                  <span className="skills_percentage uiux"></span>
                </div>
              </div>

               <div className="skills_data">
                <div className="skills_titles">
                  <h3 className="skills_name">DSA</h3>
                  <span className="skills_number">60%</span>
                </div>

                <div className="skills_bar">
                  <span className="skills_percentage dsa"></span>
                </div>
              </div>

              

            </div>
           </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About