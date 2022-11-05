import React from 'react'
import Showsurvey from '../stylescss/Showsurvey'
import data from './data'
import './UserSurvey.css'
import {useNavigate} from 'react-router-dom'

function UserSurvey() {
  const navigate = useNavigate()
  const handleClick = () => {
    alert('Survey Submitted Successfully');
    navigate('/')
  }
  return (
    <div className='userSurvey'>
        {data.map(obj=> 
        <Showsurvey 
        question={obj.question}
        answer={obj.answer}
        />)}
        <button className='confirmBtn' onClick={handleClick}>Confirm</button>
    </div>
  )
}

export default UserSurvey