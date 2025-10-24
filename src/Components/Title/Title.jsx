import React from 'react'
import './Title.css'

function Title({Subtitle,tilte}) {
  return (
    <div className='title'>
      <p>{Subtitle}</p>
      <h2>{tilte}</h2>
    </div>
  )
}
export default Title
