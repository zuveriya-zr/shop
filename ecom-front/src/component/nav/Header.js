import React from "react";
import { Typography, Button, Menu,
  MenuHandler,
  MenuList,
  MenuItem } from "@material-tailwind/react";
import firebase from "firebase/compat/app";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "./SideMenu";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //get the data from the state

  const { user } = useSelector((state) => ({ ...state }));

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
    <div className="sticky top-0 z-50 bg-white shadow-sm items-center md:h-[60px]">
      <div className=" xl:container bg-white mx-auto xl:space-x-6  flex px-2 md:px-3 md:py-3 py-2  ">
        <Link to="/">
          <p className="flex  text-2xl font-bold items-center xl:mx-2  cursor-pointer my-auto">
            Ecom-Shop
          </p>
        </Link>
        <div className="md:flex hidden flex-1  text-center">
       <span className="d-flex flex-1 justify-center ">
       <Menu>
      <MenuHandler>
        <Typography className="cursor-pointer mx-5 bg-white border-2 border-gray-300 rounded-md shadow-md  w-24 ">List</Typography>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
    <Menu>
      <MenuHandler>
        <Typography className="cursor-pointer mx-5 bg-white border-2 border-gray-300 rounded-md shadow-md  w-24 ">List</Typography>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
    <Menu>
      <MenuHandler>
      <Typography className="cursor-pointer mx-5 bg-white border-2 border-gray-300 rounded-md shadow-md  w-24 ">List</Typography>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
       </span>

          {!user && (
            <Link to="/login">
              <Button color="green" size="sm">
                Login / Signup
              </Button>
            </Link>
          )}
{user && (
<Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className="p-2 "> {user.email && user.email.split('@')[0]}</Button>
      </MenuHandler>
      <MenuList>
    {user.role === 'customer' &&     <Link style={{textDecoration:'none',outline:'none'}} to='/user-dash'><MenuItem>Profile</MenuItem></Link>}
    {user.role === 'admin' &&     <Link style={{textDecoration:'none',outline:'none'}} to='/admin-dash'><MenuItem>Admin Dash</MenuItem></Link>}
        <MenuItem>Order</MenuItem>
        <MenuItem  onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
)}
   
          
        </div>
        <SideMenu  />
      </div>
    </div>
  );
}

export default Header;
