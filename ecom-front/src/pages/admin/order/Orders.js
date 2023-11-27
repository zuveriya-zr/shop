import React, {useEffect,useState} from 'react'

import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import AdminNav from '../../../component/nav/AdminNav'
import { getAllProds } from '../../../functions/prod-f'
const Orders = () => {
const [products,setProducts] = useState([])
const [loading,setLoading]=useState(false)
const TABLE_HEAD = ["Product", "Price", "Shipping", "Quantity", ""];
useEffect(()=>{
listAllProd()
},[])

const listAllProd =()=>{
  getAllProds(10)
  .then((res)=> {
    // console.log(res.data)
setProducts(res.data)
  })
  .catch((err)=> console.log("fetching all prod err ==>",err))
}

  return (
    <div className="container-fluid d-flex  space-x-2">

<div className="w-[20%]">
<AdminNav />
</div>
<div className="w-[80%]  text-center mx-auto ">
<h1>Admin Dashboard</h1>
<Card className="h-full w-full overflow-hidden">

  <CardBody  className="overflow-scroll px-0">
  <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b  border-blue-gray-100 bg-blue-gray-50 p-4"
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
   orders table
            </tbody>
          </table></CardBody></Card>
</div>

  </div>
  )
}

export default Orders