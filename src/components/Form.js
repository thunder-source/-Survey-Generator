import React from 'react'
import './Form.css'
import {useNavigate} from 'react-router-dom'

function Form() {
  const navigate = useNavigate()
  return (
    <div className='main'>
        <h1>Welcome to Tiger Survey</h1>
        <div className="container">
            <img src="./images/img1.png" alt="" />
            <div className="button">
                <button className='create-servey' onClick={()=> navigate('createsurvey')}>Create Survey</button>
                <button className='take-servey' onClick={()=>navigate('usersurvey')}>Take Survey</button>
            </div>
        </div>
    </div>
  )
}

export default Form