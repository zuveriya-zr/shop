import React, {useEffect,useState} from 'react'
import { Avatar, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import UserNav from '../../component/nav/UserNav'
import { useSelector } from 'react-redux'
import { getUserOrders } from '../../functions/user-f'
import OrderTable from '../../component/cards/OrderTable'
const Order = () => {
const [loading,setLoading]=useState(false)
const TABLE_HEAD = ["Product", "Price","", "Shipping","",""];
const [orders, setOrders] = useState([]);
const { user } = useSelector((state) => ({ ...state }));

useEffect(() => {
  loadUserOrders();
}, []);

const loadUserOrders = () =>
  getUserOrders(user.token).then((res) => {
    console.log(JSON.stringify(res.data, null, 4));
    setOrders(res.data);  
  });
 





  return (
    <div className="container-fluid d-flex  space-x-2">

<div className="w-[20%]">
<UserNav />
</div>
<div className="w-[80%]  text-center mx-auto ">
<h1>User Orders</h1>
<Card className="h-full w-full overflow-hidden">

  <CardBody  className="overflow-scroll px-0">
  <table className="w-full min-w-max table-auto ">
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
                  className=" font-bold text-left leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='h-full w-full overflow-hidden'>
        
     {orders.map((order,i)=>(
         < >
         <OrderTable  key={i}  order={order}  />
         </>
     ))}
            </tbody>
          </table></CardBody></Card>
</div>

  </div>
  )
}

export default Order