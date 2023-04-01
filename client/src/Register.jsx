import './register.css';
import React, { useState } from "react";
import axios from 'axios'



export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [rPassword, setRpass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [backendData, setBackendData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3333/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repeatPassword: rPassword,
        username: username
        })
        .then(
            response => setBackendData(response.data.message)
        )
        .catch((err) =>{
            setBackendData(err.response.data.message);
        })
    }

    return(
        <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="FirstName">First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstname" placeholder="First Name" id="FirstName" name="FirstName"/>
            <label htmlFor="LastName">Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" placeholder="Last Name" id="LastName" name="LastName"/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="Email" name="Email"/>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" id="Username" name="Username"/>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="Password" name="Password"/>
            <label htmlFor="password">Repeat Password</label>
            <input value={rPassword} onChange={(e) => setRpass(e.target.value)} type="password" placeholder="Repeat password" id="Password" name="Password"/>
            <button type="submit">Register</button>
        </form>
        { (() => {
            if (backendData.length > 0) {
                return (<p>{backendData}</p>)
            }
        })()}
        <button onClick={ () => props.onFormSwitch('Login')}>
            Already have an account? Login here.
        </button>
        </div>
    )
}