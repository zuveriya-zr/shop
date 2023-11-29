import React from 'react'
    import {
      Typography,
    Button,
    Avatar,
  
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { CheckBadgeIcon, CheckIcon, TruckIcon, XMarkIcon } from '@heroicons/react/24/solid';

const OrderTable = ({order}) => {

  return (
<>    
{/* {JSON.stringify(prod)} */}
{order.products.map((p, i) => (
                 <tr className='px-4  ' key={i}>
                 <td >
                     <div className="flex  items-center gap-3">
                       {p.product.images && p.product.images.length ? ( <Avatar
                          src={p.product.images[0].url }
                         alt={p.product.title}
                         size="xxl"
                         variant='square'
                         className="border bg-cover border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                       />
                       ) : ( <Avatar
                           src={'/noimg.jpg'}
                          alt={p.product.title}
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
                         {p.product.title}
                       </Typography>
                     </div>
                   </td>
               
               <td className='text-left' >
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="text-lg font-bold text-center"
                 >
                 &#8377;  {p.product.price}
                 </Typography>
               </td>
               <td className='text-left' >
                 <Typography
                   variant="small"
                   color="blue-gray"
                   className="text-lg font-bold text-center"
                 >
                   {p.product.quantity}
                 </Typography>
               </td>
               
                
               <td >
                
                  
   

               {order.orderStatus === "Not Processed" && (
              <span className='text-center p-1 mx-4 d-flex h-8 '><XMarkIcon className='h-8 w-8 mx-1' style={{ color: "red" }} /> Not Processed</span>
          
                )}
                 {order.orderStatus === "Cancelled" && (
              <span className='text-center p-1 mx-4 d-flex h-8 '><XMarkIcon className='h-8 w-8 mx-1' style={{ color: "red" }} /> Cancelled</span>
          
                )}
                 {order.orderStatus === "Processing" && (
              <span className='text-center p-1 mx-4 d-flex h-8 '><CheckIcon className='h-8 w-8 mx-1' style={{ color: "orange" }} /> Processing</span>
          
                )}
                 {order.orderStatus === "Dispatched" && (
              <span className='text-center p-1 mx-4 d-flex h-8 '><TruckIcon className='h-8 w-8 mx-1' style={{ color: "black" }} /> Disptached</span>
          
                )}
                  {order.orderStatus === "Completed" && (
              <span className='text-center p-1 mx-4 d-flex h-8 '><CheckBadgeIcon className='h-8 w-8 mx-1' style={{ color: "green" }} /> Completed</span>
          
                )}
                 
               </td>
              
               
             </tr>
             ))}
          
     
</>  

  )
}

export default OrderTable