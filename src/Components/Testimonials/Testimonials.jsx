import React, { useRef } from 'react'
import './Testimonials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/president1.png'
import user_2 from '../../assets/president2.png'
import user_3 from '../../assets/president3.png'


function Testimonials() {
    const slider=useRef()
    let tx = 0;

    const slideForward=()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

    }
    const slideBackward=()=>{
          if(tx < 0){
            tx = tx + 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
      <img src={next_btn} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_btn} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                    </div>
                    <h3>Thiru.J.Balamurugan</h3>
                    <span>President</span>
                    <p>Choosing to pursue my degree at Edusity 
                    was one of the best decisions I've ever 
                    made. The supportive community, state-
                    of-the-art facilities, and commitment to 
                    academic excellence have truly exceeded 
                    my expectations.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                    </div>
                    <h3>Thiru.M.Dharanidharan</h3>
                    <span>Secretary & Correspondent</span>
                    <p>Choosing to pursue my degree at Edusity 
                    was one of the best decisions I've ever 
                    made. The supportive community, state-
                    of-the-art facilities, and commitment to 
                    academic excellence have truly exceeded 
                    my expectations.</p>
                </div>
            </li>
             <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                    </div>
                    <h3>Dr.D.Venugopal</h3>
                    <span>Principal</span>
                    <p>Choosing to pursue my degree at Edusity 
                    was one of the best decisions I've ever 
                    made. The supportive community, state-
                    of-the-art facilities, and commitment to 
                    academic excellence have truly exceeded 
                    my expectations.</p>
                </div>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
