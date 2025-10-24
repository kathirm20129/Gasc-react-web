import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'

function Contact() {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon}alt="" /></h3>
            <p>Feel free to reach out through contact 
                form or find our contact information below. 
                Your feedback, questions, and suggestions 
                are important to us as we strive to provide 
                exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />gobiartscollege@gascgobi.ac.in</li>
                    <li><img src={phone_icon} alt="" />04285 - 240147</li>
                    <li> <img src={location_icon} alt="" />Gobi Arts & Science Collegee, Gobichettipalayam</li>
                </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Name :</label>
                <input type="text" name='name' placeholder='Enter Your name' required/>
                <label>Phone Number :</label>
                <input type="tel" name='phone' placeholder='Enter Your mobile' required />
                <label>Write Your Messages here :</label>
                <textarea name="message" rows="6" placeholder='enter your message' required/>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
