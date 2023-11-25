import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoadingRedirect from './LoadingRedirect'

const UserRoutes = () => {
const {user} = useSelector((state)=> ({...state}))


 return  user && user.token ? (
// using outlet ==> /user-dash ==>/user-dash/order (or) /user-dash/profile
<Outlet /> ) : (<LoadingRedirect />)
  
}

export default UserRoutes