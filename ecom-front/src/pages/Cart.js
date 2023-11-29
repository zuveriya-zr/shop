import { TrashIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {userCart} from '../functions/user-f'
const Cart = () => {
  const { user, cart } = useSelector((state) => ({ ...state }));
const dispatch = useDispatch()
const navigate= useNavigate()
const getTotal = ()=>{
  return cart.reduce((currentValue,nextValue) => {
    return currentValue + nextValue.count * nextValue.price
  },0)
}

const saveCartToDb = ()=>{
  // console.log("cart",JSON.stringify(cart,null,4))
  userCart(cart,user.token)
.then((res) => {
  console.log("CART ===>",res)
if(res.data.ok) navigate('/checkout')
})
.catch((err)=> console.log("cart",err))


}


const handleRemove=()=>{
  let cart=[]
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    // map through 
cart.map((product,i) =>{
  if(product._id === product._id){
    cart.splice(i,1)
  }
})


    localStorage.setItem("cart", JSON.stringify(cart));


    dispatch({
      type: "ADD_TO_CART",
      payload: cart,
    });
  }

}


  const TABLE_HEAD = ["Product", "Price", "Quantity", ""];
  return (
    <div className="w-full row  text-center mx-auto ">
<h1>Cart Page</h1>
{!cart.length ? (<><p className='text-xl font-bold py-5'>No Products in cart</p> <Link to='/shop'><Button className=' w-[150px] mx-auto my-4 bg-blue-500'>Add Now</Button></Link></>) : (

<Card  shadow={false}  className="col-md-9 overflow-hidden">
  <CardHeader floated={false} shadow={false}  className="rounded-none">
    ALL Products List
  </CardHeader>
  <CardBody  className="overflow-hidden px-0">
  <table className="w-full table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b  border-blue-gray-50 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" font-bold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
      {cart.map((p)=>(
 
 <tr className='p-2' >
 <td className="">
     <div className="flex items-center gap-3">
     {p.images && p.images.length ? ( <Avatar
                           src={p.images[0].url }
                          alt={p.title}
                          size="xxl"
                          variant='square'
                          className="border bg-cover border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        ) : ( <Avatar
                            src={'/noimg.jpg'}
                           alt={p.title}
                           size="xxl"
                           variant='square'
                           className="border bg-cover border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                         />
                         )}
      
       <Typography
         variant="small"
         color="blue-gray"
         className="font-bold text-center"
       >
         {p.title}
       </Typography>
     </div>
   </td>

<td >
 <Typography
   variant="small"
   color="blue-gray"
   className="text-lg font-bold text-center"
 >
   {p.price}
 </Typography>
</td>
<td >
 <Typography
   variant="small"
   color="blue-gray"
   className="text-lg font-bold text-center"
 >
   {p.quantity}
 </Typography>
</td>

<td>
<Button onClick={handleRemove} className='d-flex rounded-md px-2 h-10 font-bold ' size='sm' color='red'>  <TrashIcon className='h-5 ' /></Button>
</td>
</tr>


      ))}
            </tbody>
          </table></CardBody></Card>
          )}

{cart.length &&
          <Card className='col-md-3'>
          <CardHeader floated={false} shadow={false}  className="font-bold underline text-green-800">
    Order Summary
  </CardHeader>
  <CardBody className='text-left space-y-3'>
  {cart.map((c, i) => (
        <span key={i} className='d-flex justify-between'>
        <p className='font-medium text-lg'>Price :</p>
        <p className='font-bold'>{c.price}</p>
      </span>
          ))}
<>

  
  <hr/>
  <span className='d-flex justify-between'>
    <p className='font-medium text-lg'>Total :</p>
    <p className='font-bold'>&#8377; {getTotal()}</p>
  </span>
</>
    
  </CardBody>

  
  <Button onClick={saveCartToDb} color='green'>Checkout</Button>
          </Card>

  }
</div>
  )
}

export default Cart