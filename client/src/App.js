import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import {Register} from './Register'
import {Login} from './Login'

export default function App() {
  // Register page
    const [currentForm, setCurrentFrom] = useState('Register');
  
    const toggleForm = (formName) => {
      setCurrentFrom(formName);
    }
  // Register page
    const [backendData, setBackendData] = useState([]);
    const usernameRef = useRef();
    const passwordRef = useRef();
    
    const submit = () => {
      const username = usernameRef.current.value;
      const email = usernameRef.current.value;
      const password = passwordRef.current.value;
      axios.post('http://localhost:3333/login', {
        username: username,
        email: email,
        password: password
      })
      .then(
        response => setBackendData(response.data.message)
      )
      .catch( (err) => {
        setBackendData(err.response.data.message);
      }
      )
    }
  return (
    <div classname="App">
      <input ref={usernameRef} placeholder="username/email" type="text" />
      <input ref={passwordRef} placeholder="password" type="text" />
      
      <button onClick={submit}>Login</button>
      {(() => {if (backendData.length > 0) {
        return (<p>{backendData}</p>)
      }
      })()}
      {
        currentForm === "Register" ? <Register onFormSwitch={toggleForm}/> : <Login onFormSwitch={toggleForm}/>
        // This is for Register page
      }
    </div>
  );
}

