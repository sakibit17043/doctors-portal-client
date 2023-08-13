import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,loadingAdmin] = useAdmin(user);
    const location = useLocation();
    if(loading || loadingAdmin){
        return <Loading></Loading>
    }
    if(!user || !admin){
        signOut(auth);
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default RequireAdmin;