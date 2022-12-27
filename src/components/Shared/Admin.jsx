import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Admin = () => {
   const admin = useSelector(state => state.admin)
    if(admin){
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }
}

export default Admin