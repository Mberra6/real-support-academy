import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import './registerlogin.css';



export const RegisterLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [rPassword, setRpass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [backendPositiveData, setBackendPositiveData] = useState([]);
    const [backendErrorData, setBackendErrorData] = useState([]);

    const heading = useRef();
    const formData = useRef();
    const initialBtn = useRef();
    const nextBtn = useRef();
    const registerNow = useRef();
    const loginNow = useRef();
    
    useEffect(() => {
        nextBtn.current.onclick = () => {
            setBackendPositiveData([]);
            setBackendErrorData([]);
            setEmail('');
            setUsername('');
            setPass('');
            formData.current.style.marginLeft = "-50%";
            heading.current.style.marginLeft = "-50%";
            
        };
        initialBtn.current.onclick = () => {
            setBackendPositiveData([]);
            setBackendErrorData([]);
            setFirstName('');
            setLastName('');
            setEmail('');
            setUsername('');
            setPass('');
            setRpass('');
            formData.current.style.marginLeft = "0%";
            heading.current.style.marginLeft = "0%";
            formData.current.reset();
        };
        registerNow.current.onclick = () => {
            nextBtn.current.click();
            return false;
        };
        loginNow.current.onclick = () => {
            initialBtn.current.click();
            return false;
        };
    }, []);


    const handleSubmitRegister = (e) => {
        e.preventDefault();
        setPass('');
        setRpass('');
        axios.post('http://localhost:3333/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        repeatPassword: rPassword,
        username: username
        })
        .then(
            response => setBackendPositiveData(response.data.message)
        )
        .catch((err) =>{
            setBackendErrorData(err.response.data.message);
        })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        setEmail('');
        setUsername('');
        setPass('');
        axios.post('http://localhost:3333/login', {
        email: email,
        username: username,
        password: password
        })
        .then(
            response => setBackendPositiveData(response.data.message)
        )
        .catch((err) =>{
            setBackendErrorData(err.response.data.message);
        })
    }

    return(
        <div className="auth-form-container">
            <div className="heading">
                <div ref={heading} className="head login">
                    Login
                </div>
                <div className="head register">
                    Register
                </div>
            </div>
            <div className="slide-container">
                <div className="slider-control">
                    <input type="radio" name="slider" id="login" defaultChecked/>
                    <input type="radio" name="slider" id="register" />
                    <label htmlFor="login" ref={initialBtn} className="slider login">Login</label>
                    <label htmlFor="register" ref={nextBtn} className="slider register">Register</label>
                    <div className="slide-tab"></div>
                </div>
                <div className="form-data">
                    <form className="login" ref={formData} onSubmit={handleSubmitLogin}>
                        <div className="fields">
                            <input value={email} onChange={(e) => {setEmail(e.target.value); setUsername(e.target.value)}} placeholder="Email/Username" id="Email" name="Email" required/>
                        </div>
                        <div className="fields">
                            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="Password" name="Password" required/>
                        </div>
                        <div className="fields btn">
                            <div className="btn-style"></div>
                            <input type="submit" value="Login"/>
                        </div>
                        { (() => {
                            if (backendPositiveData.length > 0) {
                                return (<p className="positive">{backendPositiveData}</p>)
                            } else if (backendErrorData.length > 0) {
                                return (<p className="negative">{backendErrorData}</p>)
                            }
                        })()}
                        <div className="registerlink">
                            Not a Member? <a href="#" ref={registerNow}>Register Now</a>
                        </div>
                    </form>
                    <form className="register" onSubmit={handleSubmitRegister}>
                        <div className="fields">
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstname" placeholder="First Name" id="FirstName" name="FirstName" required/>
                        </div>
                        <div className="fields">
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" placeholder="Last Name" id="LastName" name="LastName" required/>
                        </div>
                        <div className="fields">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="Email" name="Email" required/>
                        </div>
                        <div className="fields">
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Username" id="Username" name="Username" required/>
                        </div>
                        <div className="fields">
                            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="Password" name="Password" required/>
                        </div>
                        <div className="fields">
                            <input value={rPassword} onChange={(e) => setRpass(e.target.value)} type="password" placeholder="Confirm password" id="Password" name="Password" required/>
                        </div>
                        <div className="fields btn">
                            <div className="btn-style"></div>
                            <input type="submit" value="Register"/>
                        </div>
                        { (() => {
                            if (backendPositiveData.length > 0) {
                                return (<p className="positive">{backendPositiveData}</p>)
                            } else if (backendErrorData.length > 0) {
                                return (<p className="negative">{backendErrorData}</p>)
                            }
                        })()}
                        <div className="loginlink">
                            Already have an account? <a href="#" ref={loginNow}>Login Now</a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}