import React from 'react'
import './Form.css'
import {useNavigate} from 'react-router-dom'

function ButtonComponent(props) {
  const navigate = useNavigate()
  return (
    <div>
        <button onClick={props.addSurvey}className='btnStyle'>Add Question</button>
        <button onClick={() => navigate('/createsurvey/confirmsurvey')} className='btnStyle'>Publish</button>
    </div>
  )
}

export default ButtonComponent