import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';

const Logout = () => {
    const { clearAuthState  }   = useAuthContext();
    const navigate = useNavigate()

    useEffect(() => {
        clearAuthState();

        navigate("/")
    },[clearAuthState, navigate])

    return null

    
}

export default Logout