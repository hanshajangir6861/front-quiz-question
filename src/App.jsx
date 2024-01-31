import { useState } from 'react'
import axios from "axios"


function App() {
  const [Question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [option4, setOption4] = useState("")
  const [answer, setAnswer] = useState("")

const onSubmit = async()=>{
  let result = await axios.post("http://localhost:8000/form/add" ,{
    question:Question,
    option1:option1,
    option2:option2,
    option3:option3,
    option4:option4,
    answer:answer
  })
  result =  result.data
  alert("Your Question has been added")
  setQuestion('')
  setOption1('')
  setOption2('')
  setOption3('')
  setOption4('')
  setAnswer('')
  // console.log(result);

}


  return (
    <>
      <div className="class">
        <label htmlFor="Question">Question</label>
        <input type="text" placeholder='Enter the question' 
        value={Question}
        onChange={(e)=>setQuestion(e.target.value)} />
        
        <br />

        <label htmlFor="option1">Option 1</label>
        <input type="text" placeholder='Enter the option no 1' 
        value={option1}
        onChange={(e)=>setOption1(e.target.value)} /><br />

        <label htmlFor="option2">Option 2</label>
        <input type="text" placeholder='Enter the option no 2' 
        value={option2}
        onChange={(e)=>setOption2(e.target.value)}/><br />

        <label htmlFor="option3">Option 3</label>
        <input type="text" placeholder='Enter the option no 3' 
        value={option3}
        onChange={(e)=>setOption3(e.target.value)}/><br />

        <label htmlFor="option4">Option 4</label>
        <input type="text" placeholder='Enter the option no 4' 
        value={option4}
        onChange={(e)=>setOption4(e.target.value)}/><br />

        <label htmlFor="answer">Answer</label>
        <input type="text" placeholder='write answer'
        value={answer}
        onChange={(e)=>setAnswer(e.target.value)} />

        <button onClick={()=>{

onSubmit()
        }}>submit</button>
      </div>
    </>
  )
}

export default App
