import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import loadScript from 'load-script';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [orderData, setOrderData] = useState([]);
  const [token, setToken] = useState("");
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const processPayment = async () => {
  const data = {
    totalPrice: orderData?.totalPrice,
    name: user?.name,
  };

  try {
    const response = await axios.post(
      `${server}/payment/process-transaction`,
      data,
    );

    const { token } = response.data;
    setToken(token);

    if (window.snap) {
      window.snap.pay(token, {
        onSuccess: handlePaymentSuccess,
        onPending: handlePaymentPending,
        onError: handlePaymentError,
        onClose: handlePaymentClose,
      });
    }
  } catch (error) {
    console.log(error);
    toast.error("Gagal melakukan pembayaran");
  }
};

const handlePaymentSuccess = async (result) => {
  localStorage.setItem("Pembayaran", JSON.stringify(result));

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user && user,
    totalPrice: orderData?.totalPrice,
    shipping: orderData?.shipping,
    discountPrice: orderData?.discountPrice,
    subTotalPrice: orderData?.subTotalPrice,
    paymentInfo: {
      status: "success",
      paymentMethod: "midtrans",
    },
  };

  try {
    await axios.post(`${server}/order/create-order`, order);
    toast.success("Pembayaran berhasil!");
    navigate("/order/success");
    localStorage.setItem("cartItems", JSON.stringify([]));
    localStorage.setItem("latestOrder", JSON.stringify([]));
    window.location.reload();
  } catch (error) {
    console.log(error);
    toast.error("Gagal membuat order");
  }
};

const handlePaymentPending = (result) => {
  localStorage.setItem("Pembayaran", JSON.stringify(result));
  setToken("");
};

const handlePaymentError = (error) => {
  console.log(error);
  setToken("");
};

const handlePaymentClose = () => {
  console.log("ANDA BELUM MENYELESAIKAN PEMBAYARAN");
  setToken("");
};


  useEffect(() => {
    if (token) {
      loadScript("https://app.sandbox.midtrans.com/snap/snap.js", () => {
      });
    }
  }, [token]);

  const hrStyle = {
    width: '100%', // Atur lebar garis (misalnya 50% dari lebar wadah)
    height: '3px', // Atur tebal garis (misalnya 4 piksel)
    background: 'gray', // Warna garis (misalnya hitam)
    border: 'none', // Hilangkan garis tepi
    margin: '2px 0', // Atur margin atas dan bawah
  };

  return (
    <div className={`py-4  min-h-screen w-11/12 mx-auto`}>
     <div className="border border-gray-300 rounded-md p-4 bg-[#fffced]">
      <h3 className="text-xl font-semibold">Detail Pesanan</h3>
      <div>
        {orderData?.cart?.map((item, index) => (
          <div key={index} className="my-4">
            <h4 className="text-md font-semibold">{item.name}</h4>
            <p>{new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(item.price)} x {item.qty}</p>
            
            
            
          </div>
        ))}
          
          
        <p>
          Subtotal:{" "}
          {orderData?.subTotalPrice &&
            new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(orderData.subTotalPrice)}
        </p>
        
        <p>
          Kode Promo:{" "}
          {orderData?.discountPrice
            ? new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(orderData.discountPrice)
            : "-"}
          </p>
          <p>
          Pengiriman:{" "}
          {orderData?.shipping?.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
          <hr style={hrStyle} />
          <div className="border-t w-full text-right mr-2">
            <p className=" text-[17px]">
          Total:{" "}
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(orderData?.totalPrice)}
        </p>
        </div>
      </div>
      <div className="flex justify-end">
          <button
            className="mt-4 bg-black text-white px-4 py-2 rounded-md"
            onClick={processPayment}
          >
            Proses Pembayaran
          </button>
        </div>
    </div>
      
  </div>
  );
};

export default PaymentPage;




// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";
// import loadScript from 'load-script';
// import { useNavigate } from 'react-router-dom';

// const PaymentPage = () => {
//   const [orderData, setOrderData] = useState([]);
//   const [token, setToken] = useState("");
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const orderData = JSON.parse(localStorage.getItem("latestOrder"));
//     setOrderData(orderData);
//   }, []);

//   const processPayment = async () => {
//     const data = {
//       totalPrice: orderData?.totalPrice,
//       name: user?.name,
//     };

//     try {
//       const response = await axios.post(
//         `${server}/payment/process-transaction`,
//         data
//       );

//       const { token } = response.data;
//       setToken(token);

//       if (window.snap) {
//         window.snap.pay(token, {
//           onSuccess: (result) => {
//             localStorage.setItem("Pembayaran", JSON.stringify(result));

//             const order = {
//               cart: orderData?.cart,
//               shippingAddress: orderData?.shippingAddress,
//               user: user?._id,
//               totalPrice: orderData?.totalPrice,
//               paymentInfo: {
//                 status: "success",
//                 paymentMethod: "midtrans",
//               },
//             };

//             axios
//               .post(`${server}/order/create-order`, order)
//               .then(() => {
//                 toast.success("Pembayaran berhasil!");
//                 navigate("/order/success");
//                 localStorage.setItem("cartItems", JSON.stringify([]));
//                 localStorage.setItem("latestOrder", JSON.stringify([]));
//                 window.location.reload();
//               })
//               .catch((error) => {
//                 console.log(error);
//                 toast.error("Gagal membuat order");
//               });
//           },
//           onPending: (result) => {
//             localStorage.setItem("Pembayaran", JSON.stringify(result));
//             setToken("");
//           },
//           onError: (error) => {
//             console.log(error);
//             setToken("");
//           },
//           onClose: () => {
//             console.log("ANDA BELUM MENYELESAIKAN PEMBAYARAN");
//             setToken("");
//           },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Gagal melakukan pembayaran");
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       loadScript("https://app.sandbox.midtrans.com/snap/snap.js", () => {
//         // Remove the following line as it's not needed here
//       });
//     }
//   }, [token]);

//   return (
//     <div>
//       <h1>Halaman Pembayaran</h1>
//       <div>
//         <h3>Detail Pesanan</h3>
//         <div>
//           <div>
//             <p>
//               Subtotal:{" "}
//               {orderData?.subTotalPrice &&
//                 new Intl.NumberFormat("id-ID", {
//                   style: "currency",
//                   currency: "IDR",
//                 }).format(orderData.subTotalPrice)}
//             </p>
//             <p>
//               Shipping:{" "}
//               {orderData?.shipping?.toLocaleString("id-ID", {
//                 style: "currency",
//                 currency: "IDR",
//               })}
//             </p>
//             <p>
//               Discount:{" "}
//               {orderData?.discountPrice
//                 ? orderData.discountPrice.toLocaleString("id-ID", {
//                     style: "currency",
//                     currency: "IDR",
//                   })
//                 : "-"}
//             </p>
//             <p>
//               Total:{" "}
//               {new Intl.NumberFormat("id-ID", {
//                 style: "currency",
//                 currency: "IDR",
//               }).format(orderData?.totalPrice)}
//             </p>
//           </div>
//         </div>
//       </div>
//       <button onClick={processPayment}>Proses Pembayaran</button>
//     </div>
//   );
// };

// export default PaymentPage;




// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";
// import loadScript from 'load-script';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from 'react-router-dom';


// const PaymentPage = () => {
//   const [orderData, setOrderData] = useState([]);
//   const [token, setToken] = useState("");
//     const { user } = useSelector((state) => state.user);
//     const navigate = useNavigate();

//   useEffect(() => {
//     const orderData = JSON.parse(localStorage.getItem("latestOrder"));
//     setOrderData(orderData);
//   }, []);

//   const processPayment = async () => {
//     const data = {
//       totalPrice: orderData?.totalPrice,
//       name: user?.name,
//     };

//     try {
//       const response = await axios.post(
//         `${server}/payment/process-transaction`,
//         data
//       );

//       const { token } = response.data;
//       setToken(token);

//       if (window.snap) {
//         window.snap.pay(token, {
//           onSuccess: (result) => {
//             localStorage.setItem("Pembayaran", JSON.stringify(result));

//             const order = {
//               cart: orderData?.cart,
//               shippingAddress: orderData?.shippingAddress,
//               user: user?._id,
//               totalPrice: orderData?.totalPrice,
//               paymentInfo: {
//                 status: "success",
//                 paymentMethod: "midtrans",
//               },
//             };

//             axios
//               .post(`${server}/order/create-order`, order)
//               .then(() => {
//                 toast.success("Pembayaran berhasil!");
//                 navigate("/order/success");
//                 localStorage.setItem("cartItems", JSON.stringify([]));
//                 localStorage.setItem("latestOrder", JSON.stringify([]));
//                 window.location.reload();
//               })
//               .catch((error) => {
//                 console.log(error);
//                 toast.error("Gagal membuat order");
//               });
//           },
//           onPending: (result) => {
//             localStorage.setItem("Pembayaran", JSON.stringify(result));
//             setToken("");
//           },
//           onError: (error) => {
//             console.log(error);
//             setToken("");
//           },
//           onClose: () => {
//             console.log("ANDA BELUM MENYELESAIKAN PEMBAYARAN");
//             setToken("");
//           },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Gagal melakukan pembayaran");
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       loadScript("https://app.sandbox.midtrans.com/snap/snap.js", () => {
//         // Remove the following line as it's not needed here
//       });
//     }
//   }, [token]);

//   return (
//     <div className="container">
//       <h1 className="mt-4">Halaman Pembayaran</h1>
//       <div className="card mt-4">
//         <div className="card-body">
//           <h3 className="card-title">Detail Pesanan</h3>
//           <div className="row">
//             <div className="col-md-6">
//               <p className="card-text">
//                 Subtotal:{" "}
//                 {orderData?.subTotalPrice &&
//                   new Intl.NumberFormat("id-ID", {
//                     style: "currency",
//                     currency: "IDR",
//                   }).format(orderData.subTotalPrice)}
//               </p>
//               <p className="card-text">
//                 Shipping:{" "}
//                 {orderData?.shipping?.toLocaleString("id-ID", {
//                   style: "currency",
//                   currency: "IDR",
//                 })}
//               </p>
//               <p className="card-text">
//                 Discount:{" "}
//                 {orderData?.discountPrice
//                   ? orderData.discountPrice.toLocaleString("id-ID", {
//                       style: "currency",
//                       currency: "IDR",
//                     })
//                   : "-"}
//               </p>
//               <p className="card-text">
//                 Total:{" "}
//                 {new Intl.NumberFormat("id-ID", {
//                   style: "currency",
//                   currency: "IDR",
//                 }).format(orderData?.totalPrice)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <button className="btn btn-primary mt-4" onClick={processPayment}>
//         Proses Pembayaran
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";
// import { loadScript } from 'load-script';

// const MidtransPay = () => {
//   const [orderData, setOrderData] = useState([]);
//   const [token, setToken] = useState("");
//   const { user } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const orderData = JSON.parse(localStorage.getItem("latestOrder"));
//     setOrderData(orderData);
//   }, []);

//   const order = {
//     cart: orderData?.cart,
//     shippingAddress: orderData?.shippingAddress,
//     user: user && user,
//     totalPrice: orderData?.totalPrice,
//   };

//   const processPayment = async () => {
//     const data = {
//       transaction_details: {
//         // order_id: orderId,
//         gross_amount: orderData?.totalPrice,
//       },
//     };
//     console.log("Order ID:", orderData?.orderId);

//     try {
//       const response = await axios.post(
//         `${server}/payment/process-transaction`,
//         data
//       );

//       const { token } = response.data;
//       setToken(token);
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to initiate payment");
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
//       const midtransClientKey = "SB-Mid-client-3nHMokxoZpEqoHor";

//       loadScript(midtransUrl, () => {
//         window.snap.pay(token, {
//           onSuccess: (result) => {
//             localStorage.setItem("Pembayaran", JSON.stringify(result));
//             setToken("");
//           },
//           onPending: (result) => {
//             localStorage.setItem("Pembayaran", JSON.stringify(result));
//             setToken("");
//           },
//           onError: (error) => {
//             console.log(error);
//             setToken("");
//           },
//           onClose: () => {
//             console.log("ANDA BELUM MENYELESAIKAN PEMBAYARAN");
//             setToken("");
//           },
//         });
//       });
//     }
//   }, [token]);

//   const CartData = ({ orderData }) => {
//     const shipping = orderData?.shipping?.toFixed(2);
//     return (
//       <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
//         <div className="flex justify-between">
//           <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
//           <h5 className="text-[18px] font-[600]">
//             ${orderData?.subTotalPrice}
//           </h5>
//         </div>
//         <br />
//         <div className="flex justify-between">
//           <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
//           <h5 className="text-[18px] font-[600]">${shipping}</h5>
//         </div>
//         <br />
//         <div className="flex justify-between border-b pb-3">
//           <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
//           <h5 className="text-[18px] font-[600]">
//             {orderData?.discountPrice ? "$" + orderData.discountPrice : "-"}
//           </h5>
//         </div>
//         <h5 className="text-[18px] font-[600] text-end pt-3">
//           ${orderData?.totalPrice}
//         </h5>
//         <br />
//         <button onClick={processPayment}>Bayar dengan Midtrans</button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Midtrans Payment Page</h1>
//       {/* Display order details */}
//       <CartData orderData={orderData} />
//     </div>
//   );
// };

// export default MidtransPay;

