import React, {useState} from 'react'
import AddServey from './AddServey'
import AddSurvey2 from './AddSurvey2'
import './Form.css'

function CreateServey() {

    const [selet , setSelect] = useState('')

    const handleSelet= ()=>{
      setSelect('')
    }
  return (
    <div className='main'>
        <h1>Welcome to Tiger Servey</h1>
        <div className="container">
            <img src="./images/img1.png" alt="" />

            <select onChange={(event)=>setSelect(event.target.value)} className='select' name='select-option'>
                <option value={"Select Option"} selected disabled hidden>Select Option</option>
                <option value="multiple">Multi Select</option>
                <option value="single">Single Select</option>
            </select>
            {selet==="multiple" ? (<AddServey selet={handleSelet}/>):selet==="single"?(<AddSurvey2 selet={handleSelet}/>):("")}
            
        </div>
    </div>
  )
}

export default CreateServey