import React from 'react'
import "./testimonials.css";
import Image1 from "../../assets/p1.webp"
import Image2 from "../../assets/p2.avif"
import Image3 from "../../assets/p3.jpg"
import Image4 from "../../assets/p4.jpg"


// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    id:1,
    image:Image1,
    title:"Priya Sharma",
    subtitle: "Teammate @ GreenPlate Hackathon",
    comment: "Shruti created a clean and intuitive task manager interface for our project. She was fast and responsive to changes.",
  },

  {
    id:2,
    image:Image2,
    title:"Raman",
    subtitle: "Test User, Weather Forecast App",
    comment: " The weather app is so simple and fast! Loved the UI and how quickly it gives accurate forecasts",
  },

  {
    id:3,
    image:Image3,
    title:" Sana Shaikh",
    subtitle: " App Tester",
    comment: "Super simple and accurate weather results — and it works on my mobile too. The UI is minimalist but beautiful.",
  },

  {
    id:4,
    image:Image4,
    title:" Arjun Verma",
    subtitle: "Project Collaborator",
    comment: "“Shruti designed a functional task management interface with React that looks clean and works smoothly. She pays great attention to user flow.”",
  },
]
const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section_title">Clients & Reviews</h2>

      <Swiper className="testimonials_container grid"
       modules={[ Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{ clickable: true }}
      >
 {data.map(({id,image,title,subtitle,comment})=>{
  return (
    <SwiperSlide className="testimonials_item">
      <div className="thumb">
        <img src={image} alt="" />
      </div>
      <h3 className="testimonials_title">{title}</h3>
      <span className='subtitle'>{subtitle}</span>
      <div className="comment">{comment}</div>
    </SwiperSlide>
  )
 })}
      </Swiper>
    </section>
  )
}

export default Testimonials