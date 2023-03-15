import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export default function App() {
  const [backendData, setBackendData] = useState([]);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    axios.post('http://localhost:3333/register', {
      username: username,
      password: password
    })
    .then(
      response => setBackendData(response.data)
    )
  };
  //test
  return (
    <div>
      <input ref={usernameRef} type="text" />
      <input ref={passwordRef} type="text" />
      <button onClick={submit}>Send POST Request</button>
      {(() => {if (backendData.length > 0) {
        return (<p>{backendData}</p>)
      }
    })()}
    </div>
  )
}

