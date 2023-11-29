import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    InboxIcon,
    PowerIcon,
    KeyIcon,
  } from "@heroicons/react/24/solid";
  import {Link, useNavigate} from 'react-router-dom' 
  import { useDispatch } from 'react-redux';
  import firebase from "firebase/compat/app";
   


  const UserNav = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
     
    const handleLogout = () => {
      //logging out the user using firebase
      firebase.auth().signOut();
      //changing the state og logout action
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
      navigate("/login");
    };
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Dashboard
          </Typography>
        </div>
        <List>
     
          <ListItem>
            <ListItemPrefix>
              <KeyIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='/user-dash/pass'>Password</Link>
          </ListItem>
        <Link to='/user-dash/order'>
        <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Order
            
          </ListItem>
        </Link>
         
          
          <ListItem onClick={handleLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }

  export default UserNav