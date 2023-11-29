import React, {useEffect,useState} from 'react'
import { changeStatus, getOrders } from '../../../functions/admin-f'
import { Card, CardBody,  Typography } from '@material-tailwind/react'
import AdminNav from '../../../component/nav/AdminNav'
import AdminOrderTable from '../../../component/cards/AdminOrderTable'
import { useSelector } from 'react-redux'
import {toast} from 'react-toastify'
const Orders = ()=>{

const [orders, setOrders] = useState([]);
const { user } = useSelector((state) => ({ ...state }));

useEffect(() => {
  loadOrders();
}, []);

const loadOrders = () =>
  getOrders(user.token).then((res) => {
    console.log(JSON.stringify(res.data, null, 4));
    setOrders(res.data);
  });

const handleStatusChange = (orderId, orderStatus) => {
  changeStatus(orderId, orderStatus, user.token).then((res) => {
    toast.success("Status updated");
    loadOrders();
  });
};


const TABLE_HEAD = ["Product", "Price", "Shipping", "Status", ""];



  return (
    <div className="container-fluid d-flex  space-x-2">

<div className="w-[20%]">
<AdminNav />
</div>
<div className="w-[75%] h-full mb-4 text-center mx-auto ">
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
        {orders.map((order,i)=>(
         < >
         <AdminOrderTable key={i} handleStatusChange={handleStatusChange}  order={order}  />
         </>
     ))}
            </tbody>
          </table></CardBody></Card>
</div>

  </div>
  )
}

export default Orders