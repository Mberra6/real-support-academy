import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminRoutes = () => {
    const [auth, setAuth] = useState(null);
    const isAdmin = parseInt(localStorage.getItem('isAdmin'));

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`https://${process.env.REACT_APP_SERVER_URL}/user/auth`, {
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
                return <Outlet/>
            } else if (auth) {
                return <Navigate to="/user/home"/>
            } else {
                return <Navigate to="/"/>
            }
        })()}
        </>
    )
    
}

export default AdminRoutes;