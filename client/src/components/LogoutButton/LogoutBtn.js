import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../AuthProvider';
import "../Hero/hero.css";

const LogoutBtn = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.clear();
        setAuth(false);
        navigate('/');
    }
    return(
        <>
            <button className="navbarBtn" onClick={handleLogout}>Logout</button>
        </>

    )
}

export default LogoutBtn;