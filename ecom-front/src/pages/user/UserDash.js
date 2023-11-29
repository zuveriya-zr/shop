import React from "react";
import UserNav from "../../component/nav/UserNav";
const UserDash = () => {
  return (
    <div className="container-fluid d-flex space-x-2">
      <div className="user_nav">
        <UserNav />
      </div>
      <div className="user_dash text-center mx-auto ">
        <h1>User Dashboard</h1>
        
      </div>
    </div>
  );
};

export default UserDash;
