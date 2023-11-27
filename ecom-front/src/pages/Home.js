import React from 'react'
import BannerSlide from '../component/home/BannerSlide'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import NewArrival from '../component/home/NewArrival'
import BestSeller from '../component/home/BestSeller'

const Home = () => {
  return (
    <>
    <div className=' z-1 text-center m-1  px-3 py-1 rounded-md h-[35px]'>
    </div>
   <section>
   <BannerSlide />
   </section>
   <section>
    <NewArrival/>
   </section>
   <hr/>
   <section>
    <BestSeller />
   </section>
    </>
  )
}

export default Home