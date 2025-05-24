import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loading, userData} = use(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='text-center text-primary mt-10'><span className="loading loading-bars loading-xl"></span><span className="loading loading-bars loading-xl"></span></div>
    }

    if(userData){
        return children
       
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate> 
};

export default PrivateRoute;