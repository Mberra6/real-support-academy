import React from "react";
import { useNavigate } from "react-router-dom";
import "../Hero/hero.css";

const LogoutBtn = (props) => {
    const navigate = useNavigate();
    return(
        <>
            <button className="navbarBtn" onClick={() => navigate("/")}>Logout</button>
        </>

    )
}

export default LogoutBtn;