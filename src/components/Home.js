import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'
import {url} from '../App'
import Button from 'react-bootstrap/Button'

function Home() {

    let [sessionData,setSessionData] = useState([]);

    let navigate = useNavigate();

    let getData = async ()=>{
        
        let res = await axios.get(`${url}/session`)
        setSessionData(res.data);
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
        <div className='button-wrapper'>
            <Link to='/create-session'>
                <div>
                    <Button variant='primary'>Create Session</Button>
                </div>
            </Link>
            &nbsp;
            <Link to='/feedback'>
                <div>
                    <Button variant='success'>Give Feedback</Button>    
                </div>
            </Link>
        </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Code</th>
          <th>Topic </th>
          <th>Mentor</th>
          <th>Date</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
       {
        sessionData.map((e)=>{
            return <tr key={e.id}>
                <td className='hyper-link'>
                    <u><div onClick={()=>{
                    navigate(`/view-session/${e.code}`)
                }}>{e.code}</div></u>
                
                </td>
                <td>{e.topic}</td>
                <td>{e.mentor}</td>
                <td>{e.date}</td>
                <td>{e.avgFeedback}</td>
            </tr>
        })
       }
      </tbody>
    </Table>
    </div>
  )
}

export default Home