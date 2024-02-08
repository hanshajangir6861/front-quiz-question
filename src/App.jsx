
import { useState } from 'react'
import axios from "axios"
// import { CloudinaryContext, Image } from 'cloudinary-react';
import './App.css'
import { Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [Question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [option4, setOption4] = useState("")
  const [answer, setAnswer] = useState("")


  const onSubmit = async () => {
    let result = await axios.post("https://quiz-api-qd77.onrender.com/form/add ", {
      question: Question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      answer: answer
    })
    result = result.data
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
        <div className="question">
          <label htmlFor="Question"> Add Question</label><br />
          <input type="text" placeholder='Enter the question'
            value={Question}
            onChange={(e) => setQuestion(e.target.value)} /> <br />
        </div>
        <Container>
          <Row className='hii'>

            <Col className='drop' lg={6}>
              <div className="option">
                <label htmlFor="option1">Add Option 1</label>
                <input type="text" placeholder='option no 1'
                  value={option1}
                  onChange={(e) => setOption1(e.target.value)} /><br />
              </div>
            </Col>
            <Col className='drop' lg={6}>
              <div className="option">
                <label htmlFor="option2">Add Option 2</label>
                <input type="text" placeholder=' option no 2'
                  value={option2}
                  onChange={(e) => setOption2(e.target.value)} /><br />
              </div>
            </Col>
          </Row>



          <Row>
            <Col className='drop' lg={6}>
              <div className="option">
                <label htmlFor="option3">Add Option 3</label>
                <input type="text" placeholder=' option no 3'
                  value={option3}
                  onChange={(e) => setOption3(e.target.value)} /><br />
              </div>
            </Col>
            <Col className='drop' lg={6}>

              <div className="option">
                <label htmlFor="option4">Add Option 4</label>
                <input type="text" placeholder=' option no 4'
                  value={option4}
                  onChange={(e) => setOption4(e.target.value)} /><br />
              </div>
            </Col>
          </Row>
          <div className="answer">
            <label htmlFor="answer">Add Answer</label>
            <input type="text" placeholder='write answer'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)} />
          </div>

          <button className="click" onClick={() => {

            onSubmit()
          }}>submit</button>
        </Container>



      </div>
    </>
  )
}

export default App
