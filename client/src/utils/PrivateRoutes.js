import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PrivateRoutes = () => {
    const [auth, setAuth] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:3333/user/auth', {
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
    return ( auth ? <Outlet/> : <Navigate to="/"/> )
    
}

export default PrivateRoutes;