import React from 'react'
import './Campus.css'
import gasc_1 from '../../assets/gasc2.png'
import gallery_2 from '../../assets/gasc3.png'
import gallery_3 from '../../assets/gasc4.png'
import gallery_4 from '../../assets/gasc5.png'
import white_arrow from '../../assets/white-arrow.png'

function Campus() {
  return (
        <div className="campus">
            <div className="gallery">
                <img src={gasc_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>
            <button className='btn dark-btn'>See More Here <img src={white_arrow} alt="" /></button>
        </div>        
  )
}

export default Campus;
