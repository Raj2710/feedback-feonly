import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {url,lengthOfCode} from '../App'
import {useNavigate} from 'react-router-dom'

function CreateSession() {
    let [topic,setTopic] = useState("");
    let [mentor,setMentor] = useState("");
    let [date,setDate] = useState("");
    let navigate = useNavigate();

    let handleSubmit = async ()=>{
        let codeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        let code = ""
        for(let i=0;i<lengthOfCode;i++)
        {
            let value = Math.round(Math.random()*100)%codeString.length
            code = code + codeString[value]
        }
        let data = {
            topic,
            mentor,
            date,
            avgFeedback:0,
            code
        }
        let res = await axios.post(`${url}/session`,data);
        if(res.status==201)
        {
            navigate('/');
        }
    }
  return <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Topic</Form.Label>
        <Form.Control type="text" placeholder="Enter Topic" onChange={(e)=>setTopic(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mentor Name</Form.Label>
        <Form.Control type="text" placeholder="Mentor Name" onChange={(e)=>setMentor(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Session Date</Form.Label>
        <Form.Control type="date" placeholder="Date" onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>
    
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Create
      </Button>
    </Form>
  </>
}

export default CreateSession