import React from "react";
import { Link } from "react-router-dom";
import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from "@material-tailwind/react";
import {useDispatch, useSelector} from 'react-redux'
import _ from  'lodash'

const ProductCard = ({ product }) => {
  // destructure
  const { images, title, price, slug } = product;
  
const dispatch=useDispatch()
const handleAddToCart =()=>{
// create arr
let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push  product 
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
 
      localStorage.setItem("cart", JSON.stringify(unique));

  
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }
  };


  return (
    <>
    

    <Card className=" w-full md:h-[360px] m-2 bg-white h-[300px]">
            <CardHeader shadow={false} floated={false} >
            {images && images.length ? (
              <img
                   src={images && images.length ? images[0].url : 'laptop'}
                alt={title}
                className="h-full w-full  object-contain"
              /> )
              :(
                <img
                src={'/noimg.jpg'}
                alt={title}
                className="h-full w-full  object-cover"
              /> 
              )}
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <h5 className="font-bold text-blue-500 uppercase text-decoration underline">
                  {title}
                </h5>
                <Typography  className="font-bold  rounded-md ">
                 Price: <span className="border-2 p-1 border-red-100">	&#8377;{price}</span>
                </Typography>
              </div>
              
            </CardBody>
            <CardFooter className="pt-0 d-flex justify-between">
            <Tooltip content="Add to Cart" placement="top">
            <Button onClick={handleAddToCart} className='d-flex rounded-md  h-10 font-bold ' size='sm' color='green'>  <ShoppingCartIcon className='h-5 ml-1' /></Button>
        </Tooltip>
        <Tooltip content="View" placement="bottom">
        <Link to={`/product/${slug}`}>   <Button className='d-flex rounded-md p-2 font-bold bg-red-300 text-white shadow-md' size='sm' > <EyeIcon className='h-5 m-0 ' /></Button></Link>
        </Tooltip>
           
             
            </CardFooter>
          </Card>
    </>
  );
}

export default ProductCard
