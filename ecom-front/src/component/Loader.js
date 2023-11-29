import { Spinner } from '@material-tailwind/react'
import React from 'react'

const Loader = () => {
  return (
    <div className='text-center p-4'>
      <Spinner color='red' className="h-16 w-16 text-center mx-auto text-yellow-100" />;</div>
  )
}

export default Loader