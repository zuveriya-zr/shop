import React from 'react'
import AdminNav from '../../component/nav/AdminNav'

const AdminDash = () => {
  return (
    <div className="container-fluid d-flex space-x-2">

<div className="user_nav">
<AdminNav />
</div>
<div className="user_dash text-center mx-auto ">
<h1>Admin Dashboard</h1>
</div>

  </div>
  )
}

export default AdminDash