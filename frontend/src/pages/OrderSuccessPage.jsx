import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { Link } from 'react-router-dom';


const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h3 className="text-center mb-14 text-[30px] text-[#000000a1]">
  Pembayaran berhasil! pesanan anda sedang diproses
  <br />
  <Link
  to="/profile"
  style={{
    color: '#CF9443',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
  }}
  onMouseEnter={(e) => e.target.style.color = '#FFD700'}
  onMouseLeave={(e) => e.target.style.color = '#CF9443'}
>
  Lihat Pesanan
</Link>


</h3>

      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
