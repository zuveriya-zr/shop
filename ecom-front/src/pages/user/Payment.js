import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements} from '@stripe/react-stripe-js';
import "../../stripe.css"
import StripeCheckout from '../../component/StripeCheckout'


const promise=loadStripe(process.env.REACT_APP_STRIPE_KEY)


const Payment = () => {
  return (
    <div className='container p-5 text-center'>
<p className='text-xl font-bold text-green-500'> Complete Your Purchase ....!!!</p>
<Elements stripe={promise}>
<div className='text-center w-1/2 mx-auto'>
    <StripeCheckout />
</div>

</Elements>
    </div>
  )
}

export default Payment