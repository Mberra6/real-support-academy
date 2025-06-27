import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const PrivateRoutes = () => {
    const { auth, user } = useAuth();
    const isAdmin = user ? parseInt(user.isAdmin) : 0;

    return (
        <>
        { (() => {
            if (auth && isAdmin === 1) {
                return <Navigate to="/admin/home"/>
            } else if (auth) {
                return <Outlet/>
            } else {
                return <Navigate to="/"/>
            }
        })()}
        </>
    )

    
}

export default PrivateRoutes;