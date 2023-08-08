import React from 'react'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import MidtransPay from "../components/Midtrans/MidtransPay";


const midtransSandbox = () => {

  return (
    <div className='w-full min-h-screen bg-[#f6f9fc]'>
       <Header />
       <br />
       <br />
       <CheckoutSteps active={2} />
          <MidtransPay />
          
       <br />
       <br />
       <Footer />
    </div>
  );
};


export default midtransSandbox 