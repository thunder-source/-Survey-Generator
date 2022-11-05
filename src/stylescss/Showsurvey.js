import React from 'react'
import '../stylescss/Showsurvey.css'

function Showsurvey(props) {
    
  return (
    <div className='ShowContainer'>
      <div className="cont">
        <h1>Q: {props.question}</h1>
        <div className="options">
          {
            props.answer.map(item=>{ 
            return <div className='list'>
              <input type="radio" name='radio'/>
              <li>{item}</li>
              </div>})
          }
        </div>
      </div>
    </div>
  )
}

export default Showsurvey