import React from 'react'
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";



const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
    "Designing clean, user-friendly and responsive interfaces."
  },
   {
    id: 2,
    image: Image2,
    title: "Data Structure and Algorithm ",
    description:
    "Problem-solving with strong data structures and algorithms skills."
  },
   {
    id: 3,
    image: Image2,
    title: "Web Development",
    description:
    "Building fast, interactive web apps using React and JavaScript."
  },
  
];
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({id, image, title, description}) => (
          <div className="services_card" key={id}>
            <img src={image} alt={title} className="services_img" />
            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services