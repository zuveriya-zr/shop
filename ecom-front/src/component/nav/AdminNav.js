import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    ClipboardDocumentCheckIcon,
    ShoppingBagIcon,
    ArrowLeftOnRectangleIcon,
    HeartIcon,
    Squares2X2Icon,
    SquaresPlusIcon,
    BuildingStorefrontIcon
  } from "@heroicons/react/24/solid";
  import {Link, useNavigate} from 'react-router-dom' 
import { useDispatch } from 'react-redux';
import firebase from "firebase/compat/app";

  const AdminNav = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //get the data from the state
  
  
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
      <Card className="  h-full mb-4 w-full  p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
        <Link to='/admin-dash'>  <Typography pography variant="h5" color="blue-gray">
            Admin Dashboard
          </Typography></Link>
        </div>
        <List className='md:grid-cols-1 grid grid-cols-3' >
        <Link to='/admin-dash/category'>
          <ListItem>
            <ListItemPrefix>
              <Squares2X2Icon className="md:flex hidden h-5 w-5" />
            </ListItemPrefix>
            Category
          </ListItem></Link>
          <Link to='/admin-dash/sub'>
          <ListItem>
            <ListItemPrefix>
              <SquaresPlusIcon className="h-5 w-5" />
            </ListItemPrefix>
            {/* create product */}
            Sub Category
          </ListItem></Link>
          <Link to='/admin-dash/product'>
          <ListItem>
            <ListItemPrefix>
              <BuildingStorefrontIcon className="h-5 w-5" />
            </ListItemPrefix>
            {/* Creatng  the product */}
            Add Product
          </ListItem> </Link>
          <Link to='/admin-dash/orders'>
          <ListItem>
            <ListItemPrefix>
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
            </ListItemPrefix>
            Orders
          
          </ListItem></Link>
         
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to='/admin-dash/password'>Password</Link>
          </ListItem>
          <ListItem   onClick={handleLogout}>
            <ListItemPrefix>
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }

  export default AdminNav