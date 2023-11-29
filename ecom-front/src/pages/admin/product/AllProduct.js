import React from 'react'
    import {
      Typography,
    Button,
    Avatar,
  
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { removeProd } from '../../../functions/prod-f';

const AllProduct = ({product,handleRemove}) => {

  
    const { _id,title, price, images,shipping,quantity, slug } = product;
  return (
<>    
              <tr className='p-2' key={_id}>
                  <td className="">
                      <div className="flex items-center gap-3">
                        {images && images.length ? ( <Avatar
                           src={images[0].url }
                          alt={title}
                          size="xxl"
                          variant='square'
                          className="border bg-cover border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        ) : ( <Avatar
                            src={'/noimg.jpg'}
                           alt={title}
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
                          {title}
                        </Typography>
                      </div>
                    </td>
                
                <td >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-bold text-center"
                  >
                    {price}
                  </Typography>
                </td>
                <td >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-bold text-center"
                  >
                    {shipping}
                  </Typography>
                </td>
                <td >
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-lg font-bold text-center"
                  >
                    {quantity}
                  </Typography>
                </td>
                <td>
                   <Link to={`/admin-dash/product/${slug}`}> <Button size='sm' className='bg-green-300 mx-2'>Edit</Button></Link>
                    <Button onClick={()=>handleRemove(slug)} size='sm' className='bg-red-300 mx-2'>Delete</Button>
                </td>
              </tr>
          
     
</>  

  )
}

export default AllProduct