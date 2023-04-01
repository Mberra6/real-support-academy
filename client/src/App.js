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
  
  return (
    <div className="App">
      {
        currentForm === "Register" ? <Register onFormSwitch={toggleForm}/> : <Login onFormSwitch={toggleForm}/>
        // This is for Register page
      }
    </div>
  );
}

