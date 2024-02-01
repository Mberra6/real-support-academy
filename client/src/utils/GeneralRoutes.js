import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GeneralRoutes = () => {
    const [auth, setAuth] = useState(null);
    const isAdmin = parseInt(localStorage.getItem('isAdmin'));
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_SERVER_URL}/user/auth`, {
            headers: { authorization: "Bearer " + token }
          })
          .then((response) => {
              setAuth(true);
          })
          .catch((err) => {
              setAuth(false);
          })
    }, [])
    
    if (auth === null) return null;
    return (
        <>
        { (() => {
            if (auth && isAdmin === 1) {
                return <Navigate to="/admin/home"/>
            } else if (auth) {
                return <Navigate to="/user/home"/>
            } else {
                return <Outlet/>
            }
        })()}
        </>
    )
    
}

export default GeneralRoutes;