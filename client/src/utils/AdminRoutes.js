import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const AdminRoutes = () => {
    const { auth, user } = useAuth();
    const isAdmin = user ? parseInt(user.isAdmin) : 0;

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