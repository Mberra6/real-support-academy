import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthProvider';

const GeneralRoutes = () => {
    const { auth, user } = useAuth();
    const isAdmin = user ? parseInt(user.isAdmin) : 0;
    
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