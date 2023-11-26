import React, {useEffect,useState} from 'react'
import AdminNav from '../../component/nav/AdminNav'
import {getAllProds} from '../../functions/prod-f'
import AllProduct from './product/AllProduct'
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
const AdminDash = () => {
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
    <div className="container-fluid d-flex space-x-2">

<div className="user_nav">
<AdminNav />
</div>
<div className="w-full text-center mx-auto ">
<h1>Admin Dashboard</h1>
<Card className="h-full w-full overflow-hidden">
  <CardHeader floated={false} shadow={false} className="rounded-none">
    ALL Products List
  </CardHeader>
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
{products.map((product) => (
                <AllProduct key={product._id}
                  product={product}
                
                />           
            ))}     
            </tbody>
          </table></CardBody></Card>
</div>

  </div>
  )
}

export default AdminDash