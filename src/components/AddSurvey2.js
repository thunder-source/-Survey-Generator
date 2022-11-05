import React,{useState} from "react";
import ButtonComponent from "./ButtonComponent";
import "./Form.css";
import data from './data';

function AddServey2(props) {
    const [option , setOption] = useState([])
    const [btn , setBtn] = useState(false)
    const [que , setQue] = useState("")


    let list;
    const addSurvey = () => {
       let question = {
        question:que,
        answer:option
       }
       data.push(question)
       console.log(data);

      setBtn(false)
      setOption([])
      setQue("")
      props.selet()
    }

    console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(option.length<2){
            setOption([...option,event.target[0].value])

        event.target[0].value =""
        if(option.length===1){
          setBtn(true)
        }
        }

        
    }
  return (
    <div className="formdiv">
      <label className="questionLabel" htmlFor="question">
        ✅ Question?
      </label>
      <input id="question" onChange={(event)=> setQue(event.target.value)} type="text" placeholder="Enter question..." />
      <div className="ans">
        {option.map((item)=>
            <li>{item}</li>
        )}
      </div>
      {btn===false ?(<form onSubmit={handleSubmit}>
        <label className="ansLabel" htmlFor="options">
          ✅ Option
        </label>
        <div>
          <input id="option" type="text" placeholder="Add Your Options..." />
          <button className="add">+</button>
        </div>
      </form>):(<ButtonComponent addSurvey={addSurvey}/>)}
      {list}
    </div>
  );
}

export default AddServey2;
