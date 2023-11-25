import React, {useState} from 'react'
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
 
const SideMenu = () => {
  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <div className='md:hidden flex flex-grow-1 justify-end'>
      <IconButton variant="text" color="blue-gray" onClick={openDrawer}><Bars3BottomRightIcon className='relative h-8 w-8 text-black m-0' /></IconButton>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Ecom-shop
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
       
      </Drawer>
    
  

    </div>
  )
}

export default SideMenu