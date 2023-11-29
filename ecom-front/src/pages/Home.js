import React from 'react'
import BannerSlide from '../component/home/BannerSlide'
import NewArrival from '../component/home/NewArrival'
import BestSeller from '../component/home/BestSeller'

const Home = () => {
  return (
    <>
    
    {/* 1 */}
   <section>
   <BannerSlide />
   </section>
   {/* 2 */}
   <section>
    <NewArrival/>
   </section>
   <hr/>
   {/* 3 */}
   <section>
    <BestSeller />
   </section>
   
    </>
  )
}

export default Home