import './App.css';
import Home from './components/Home';
import CreateSession from './components/CreateSession';
import ViewSession from './components/ViewSession'
import Feedback from './components/Feedback';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
export const url = 'https://61ee1f7ed593d20017dbac50.mockapi.io'
export const lengthOfCode=6;
function App() {
  return <>
  <div>
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/feedback' element={<Feedback/>}/>
              <Route path='/create-session' element={<CreateSession/>}/>
              <Route path='/view-session/:code' element={<ViewSession/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  </>
}

export default App;

//Sessions - Create - Session Date, Session Mentor, Session Topic ----> session code 
//feedback - Input the Session Code Pre populate the session details and disable those inputs
//         - Collection of feedback using Radio Buttons
//Listing of session the following should be displayed
// - Session Code
// - Session Mentor
// - Session Topiic
// - Session Date
// - Session Avg Feedback