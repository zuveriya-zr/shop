import { TrashIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
  const TABLE_HEAD = ["Product", "Price", "Quantity", ""];
  return (
    <div className="w-full row  text-center mx-auto ">
<h1>Admin Dashboard</h1>
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
        <tr className='p-2' >
                  <td className="">
                      <div className="flex items-center gap-3">
                        <Avatar
                            src={'/noimg.jpg'}
                           alt="no image"
                           size="xxl"
                           variant='square'
                           className="border bg-cover border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                         />
                         
                       
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold text-center"
                        >
                          title
                        </Typography>
                      </div>
                    </td>
                
                <td >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-bold text-center"
                  >
                    Price
                  </Typography>
                </td>
                <td >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-bold text-center"
                  >
                    Quantity
                  </Typography>
                </td>
               
                <td>
                <Button className='d-flex rounded-md px-2 h-10 font-bold ' size='sm' color='red'>  <TrashIcon className='h-5 ' /></Button>
                </td>
              </tr>
            </tbody>
          </table></CardBody></Card>
          <Card className='col-md-3'>
          <CardHeader floated={false} shadow={false}  className="font-bold underline text-green-800">
    Order Summary
  </CardHeader>
  <CardBody className='text-left space-y-3'>
  <span className='d-flex justify-between'>
    <p className='font-medium text-lg'>Price :</p>
    <p className='font-bold'>5600</p>
  </span>
  <span className='d-flex justify-between'>
    <p className='font-medium text-lg'>Shipping Charges :</p>
    <p className='font-bold'>100</p>
  </span>
  
  <hr/>
  <span className='d-flex justify-between'>
    <p className='font-medium text-lg'>Total :</p>
    <p className='font-bold'>price + shipping</p>
  </span>
  </CardBody>
  <Link to='/checkout'><Button color='green'>Checkout</Button></Link>
          </Card>
</div>
  )
}

export default Cart