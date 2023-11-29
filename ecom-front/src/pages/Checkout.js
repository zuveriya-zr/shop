import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
} from "../functions/user-f";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Input } from "@material-tailwind/react";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res.data, null, 4));
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    //cart:[]
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      setProducts([]);
      setTotal(0);
      toast.success("Cart is Empty... Contniue shopping.");
      navigate('/shop')
    });
  };

  const saveAddressToDb = () => {
    // console.log(address);
    saveUserAddress(user.token, address).then((res) => {
      if (res.data.ok) {
        setAddressSaved(true);
        toast.success("Address saved");
      }
    });
  };

  
   

  return (
    <div className="row p-5">
      <Card className="col-md-6 p-5">
        <span>
         {user && user.token && ( <p className="text-xl font-bold text-green-600 mb-2">Hey.. {user.name} </p>)}
          <p className="text-xl">Provide Your Delivery Address</p>
        </span>
        <br />
        <Input
          type="text"
          placeholder="Enter Your Address"
          
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
        <Button disabled={!address} color="blue" className="w-1/4 mx-auto mt-4" onClick={saveAddressToDb}>
          Save
        </Button>
      </Card>

      <div className="col-md-6">
      <Card className="w-full">
          <CardHeader  floated={false} shadow={false}  className="font-bold underline text-green-800">
    Order Summary
  </CardHeader>
  <CardBody className='text-left space-y-3'>
  
        <span  className='d-flex justify-between'>
        <p className='font-medium text-lg'>Price :</p>
        <p className='font-bold'>&#8377; 4545</p>
      </span>
          
<>

  
  <hr/>
  <span className='d-flex justify-between'>
    <p className='font-medium text-lg'>Total :</p>
    <p className='font-bold'>&#8377;5456 </p>
  </span>
</>
  
  </CardBody>
  <span className="space-x-2 py-3 text-center mx-auto">
   <Button onClick={() => navigate('/payment')} disabled={!address || !addressSaved}  className="mx-2" color="green">Place Order</Button>
    <Button onClick={emptyCart} className="mx-2" color="red">Empty Cart</Button>
   </span>

  
          </Card>

      
      </div>
    </div>
  );
};

export default Checkout;
