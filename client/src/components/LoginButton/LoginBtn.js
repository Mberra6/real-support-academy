import React from "react";
import { useNavigate } from "react-router-dom";
import "/Users/vivian/Desktop/real-support-academy/client/src/components/Hero/hero.css";

const LoginBtn = (props) => {
    const navigate = useNavigate();
    return(
        <>
            <button className="navbarBtn" onClick={() => navigate("/loginreg")}>Login/Register</button>
        </>

    )
}

export default LoginBtn;