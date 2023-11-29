import React, {useEffect,useState} from 'react'
import AdminNav from '../../component/nav/AdminNav'
import {getAllProds, removeProd} from '../../functions/prod-f'
import AllProduct from './product/AllProduct'
import { Card, CardBody,  Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'




const AdminDash = () => {
const [products,setProducts] = useState([])
const [loading,setLoading]=useState(false)
const TABLE_HEAD = ["Product", "Price", "Shipping", "Quantity", ""];
const { user } = useSelector((state) => ({ ...state }));
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



const handleRemove = (slug) =>{
  // remove the product from db permenantly
  if(window.confirm("Do you want to delete?")){
    setLoading(true)
    //delete the category
    removeProd(slug,user.token)
    .then((res) => {
      setLoading(false)
      toast.error(`${res.data.title} is deleted..!!!`)
      listAllProd()
    })
    .catch((err) => {
      setLoading(false);
      if (err.response.status === 400) toast.error(err.response.data);
    });
    
  }
}

  return (
    <div className="container-fluid d-flex  space-x-2">

<div className="w-[20%] mb-4">
<AdminNav />
</div>
<div className="w-[75%] h-full mb-4   text-center mx-auto ">
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
{products.map((product) => (
                <AllProduct key={product._id}
                  product={product}
                  handleRemove={handleRemove}
                
                />           
            ))}     
            </tbody>
          </table></CardBody></Card>
</div>

  </div>
  )
}

export default AdminDash