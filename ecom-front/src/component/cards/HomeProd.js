import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    
  } from "@material-tailwind/react";
  import { ShoppingCartIcon ,EyeIcon} from '@heroicons/react/24/solid';
const HomeCard = () => {
  return (
   <div className='d-grid grid-cols-4 gap-4 py-2 '>
     <Card className=" w-full md:h-[360px] m-2 bg-white h-[300px]">
            <CardHeader shadow={true} floated={false} >
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                className="h-full w-full  object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-decoration underline">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium border-2 p-1 rounded-md border-red-100">
                  $95.00
                </Typography>
              </div>
              
            </CardBody>
            <CardFooter className="pt-0 d-flex justify-between">
           <Button className='d-flex rounded-full font-bold ' size='sm' color='green'>Add to Cart  <ShoppingCartIcon className='h-5 ml-1' /></Button>
           <Button className='d-flex rounded-full font-bold bg-white text-black shadow-inner' size='sm' >View <EyeIcon className='h-5 ml-2' /></Button>
             
            </CardFooter>
          </Card>
          <Card className=" w-full md:h-[360px] m-2 bg-white h-[300px]">
            <CardHeader shadow={true} floated={false} >
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                className="h-full w-full  object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-decoration underline">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium border-2 p-1 rounded-md border-red-100">
                  $95.00
                </Typography>
              </div>
              
            </CardBody>
            <CardFooter className="pt-0 d-flex justify-between">
           <Button className='d-flex rounded-full font-bold ' size='sm' color='green'>Add to Cart  <ShoppingCartIcon className='h-5 ml-1' /></Button>
           <Button className='d-flex rounded-full font-bold bg-white text-black shadow-inner' size='sm' >View <EyeIcon className='h-5 ml-2' /></Button>
             
            </CardFooter>
          </Card>
          <Card className=" w-full md:h-[360px] m-2 bg-white h-[300px]">
            <CardHeader shadow={true} floated={false} >
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                className="h-full w-full  object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-decoration underline">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium border-2 p-1 rounded-md border-red-100">
                  $95.00
                </Typography>
              </div>
              
            </CardBody>
            <CardFooter className="pt-0 d-flex justify-between">
           <Button className='d-flex rounded-full font-bold ' size='sm' color='green'>Add to Cart  <ShoppingCartIcon className='h-5 ml-1' /></Button>
           <Button className='d-flex rounded-full font-bold bg-white text-black shadow-inner' size='sm' >View <EyeIcon className='h-5 ml-2' /></Button>
             
            </CardFooter>
          </Card>
          <Card className=" w-full md:h-[360px] m-2 bg-white h-[300px]">
            <CardHeader shadow={true} floated={false} >
              <img
                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                alt="card-image"
                className="h-full w-full  object-cover"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium text-decoration underline">
                  Apple AirPods
                </Typography>
                <Typography color="blue-gray" className="font-medium border-2 p-1 rounded-md border-red-100">
                  $95.00
                </Typography>
              </div>
              
            </CardBody>
            <CardFooter className="pt-0 d-flex justify-between">
           <Button className='d-flex rounded-full font-bold ' size='sm' color='green'>Add to Cart  <ShoppingCartIcon className='h-5 ml-1' /></Button>
           <Button className='d-flex rounded-full font-bold bg-white text-black shadow-inner' size='sm' >View <EyeIcon className='h-5 ml-2' /></Button>
             
            </CardFooter>
          </Card>    
   </div>
        
  )
}

export default HomeCard