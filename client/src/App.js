import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export default function App() {
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
//testing
    )
  };
  return (
    <div>
      <input ref={usernameRef} placeholder="username/email" type="text" />
      <input ref={passwordRef} placeholder="password" type="text" />
      
      <button onClick={submit}>Login</button>
      {(() => {if (backendData.length > 0) {
        return (<p>{backendData}</p>)
      }
    })()}
    </div>
  )
}

