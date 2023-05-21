import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadSpinner from '../components/Pages/shared/LoadSpinner/LoadSpinner';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <LoadSpinner />
    }
    if(user){
        return children ;
    }
    return (
        <Navigate to ="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRout;