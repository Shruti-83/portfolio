import React from 'react'
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h2 className="contact_title">Let's talk about everything!</h2>
          <p className="contact_details">Don't like forms? Send me an email</p>
        </div>
        <form action="" className="contact_form">
          <div className="contact_form-group">
            
            
            <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insert you name'/>
            </div>

            <div className="contact_form-div">
              <input type="email" className="contact_form-input" placeholder='Insert you email'/>
            </div>
          </div>

          <div className="contact_form-div">
              <input type="text" className="contact_form-input" placeholder='Insert your subject'/>
            </div>
            <div className="contact_form-div contact_form-area">
             <textarea name="" cols="30" rows="10" className='contact_form-input' placeholder='write your message'></textarea>
            </div>

            <button className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact