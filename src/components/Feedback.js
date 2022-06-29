import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {url,lengthOfCode} from '../App'
import {useNavigate} from 'react-router-dom'

function Feedback() {

    let [sessions,setSessions]=useState([])
    let [code,setCode] = useState("")
    let [topic,setTopic] = useState("");
    let [mentor,setMentor] = useState("");
    let [date,setDate] = useState("");
    let [feedback,setFeedback]=useState(0)
    let navigate = useNavigate();

    useEffect(()=>{
        getSessionDetails();
    },[code])

    useEffect(()=>{
        getSessions();
    },[])

    let getSessions = async ()=>{
        let res = await axios.get(`${url}/session`)
        setSessions(res.data)
    }

    let getSessionDetails = async()=>{
        let res = await axios.get(`${url}/session/${code}`)
        console.log(res.data)
        setMentor(res.data.mentor);
        setTopic(res.data.topic)
        setDate(res.data.date)
    }

    let handleSubmit = async ()=>
    {
        let data = {
            sessionCode:code,
            feedback
        }
        let res = await axios.post(`${url}/feedback`,data) 
        if(res.status == 201)
            navigate('/')
    }

  return <>
     <Form>
     <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Session Code</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e)=>setCode(e.target.value)}>
        {
            sessions.map((e)=>{
                return <option value={e.id} key={e.id}>{e.code}</option>
            })
        }
        </Form.Select>
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Topic</Form.Label>
        <Form.Control type="text" placeholder="Enter Topic" value={topic}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mentor Name</Form.Label>
        <Form.Control type="text" placeholder="Mentor Name" value={mentor}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Session Date</Form.Label>
        <Form.Control type="date" placeholder="Date" value={date}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Session Feedback</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e)=>setFeedback(e.target.value)}>
        <option disabled selected>Select Feedback</option>
        <option value="1">Poor</option>
        <option value="2">Below Average</option>
        <option value="3">Average</option>
        <option value="4">Good</option>
        <option value="5">Excelent</option>
            </Form.Select>
    </Form.Group>
    
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Create
      </Button>
    </Form>
  </>
}

export default Feedback