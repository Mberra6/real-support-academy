import React from "react";
import { useNavigate } from "react-router-dom";
import "../Hero/hero.css";

const LogoutBtn = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.clear();
        navigate('/');
    }
    return(
        <>
            <button className="navbarBtn" onClick={handleLogout}>Logout</button>
        </>

    )
}

export default LogoutBtn;