import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { backend_url, server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const [nomorResi, setNomorResi] = useState("");


  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const handleResiSubmit = (e) => {
    e.preventDefault();
    // Kirim permintaan ke backend untuk menyimpan nomor resi
    axios
      .post(`${server}/order/submit-resi/${id}`, { nomorResi })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };



  const orderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Order updated!");
        navigate("/dashboard-orders");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const refundOrderUpdateHandler = async (e) => {
    await axios
    .put(
      `${server}/order/order-refund-success/${id}`,
      {
        status,
      },
      { withCredentials: true }
    )
    .then((res) => {
      toast.success("Order updated!");
      dispatch(getAllOrdersOfShop(seller._id));
    })
    .catch((error) => {
      toast.error(error.response.data.message);
    });
  }

  console.log(data?.status);


  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>

      
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="#806714" />
          <h1 className="pl-2 text-[25px]">Rincian Pesanan</h1>
        </div>
        <Link to="/dashboard-orders">
          <div
            className={`${styles.button} !bg-[#f3e8d7] !rounded-[4px] text-[#806714] font-[600] !h-[45px] text-[18px]`}
          >
            Daftar Pesanan
          </div>
        </Link>
      </div>

      
      
      {/* BATAS BAGIAN FLEX */}

      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#00000084]">
          ID Pesanan: <span>#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#00000084]">
          Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      {/* order items */}
      <br />
      <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <div className="frame" style={{ width: '100px', height: '100px', border: '2px solid #fffff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={`${backend_url}/${item.images[0]}`}
                alt=""
                className="image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div className="w-full">
              <h5 className="pl-3 pt-3 text-[16px]">{item.name}</h5>
              <h5 className="pl-3 text-[16px] text-[#00000091]">
                {item.price && new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.price)} 
                 x {item.qty}
              </h5>
            </div>
            
          </div>
        ))}
      
      <div className="pl-3 text-[#00000084] border-t ">
         <h5>
    Sub Total:{" "}
    <span style={{ color: "black", fontSize: "15px" }}>
      {data?.subTotalPrice
        ? new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.subTotalPrice)
        : "-"}
    </span>
  </h5>
        <h5>
  Pengiriman:{" "}
  <span style={{ color: "black" }}>
    {data?.shipping
      ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data.shipping)
      : "-"}
  </span>
        </h5>
        
        <h5>
  Kode Promo: -{" "}
  <span style={{ color: "black" }}>
    {data?.discountPrice
      ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data.discountPrice)
      : "-"}
  </span>
</h5>

            </div>

      <div className="border-t w-full text-right">
        
        <h5 className="pt-3 text-[18px]">
          Total: <strong>{data?.totalPrice && new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(data.totalPrice)}</strong>

        </h5>
        
      </div>
      <br />
      
      <div className="w-full flex items-center">
  <div className="w-full md:w-[100%] bg-[#F8ECDE] p-4 rounded-xl">
    <h4 className="pt-2 text-[18px] font-[600]">Alamat Pengiriman:</h4>
    <h4 className="pt-1 text-[16px]">
      {data?.shippingAddress.address1}
    </h4>
    <h4 className="text-[16px]">Kode Pos: {data?.shippingAddress.zipCode}</h4>
    <h4 className="text-[16px]">Penerima: {data?.shippingAddress.penerima}</h4>
    <h4 className="text-[16px]">Ponsel Aktif: {data?.shippingAddress.ponselAktif}</h4>

    <h4 className="pt-3 text-[18px] font-[600]">
      Status Pembayaran:{" "}
      {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
    </h4>
    <h4 className="pt-1 text-[18px] font-[600]">No resi: {nomorResi}</h4>
  </div>
</div>

      <br />
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
      <div className="left-section rounded-xl" style={{ flex: 1, backgroundColor: '#D2E4CB' }}>
        {/* Konten bagian kiri */}
          <div className="ml-2">
            <h4 className="pt-3 text-[18px] font-[600]">Status Pesanan:</h4>
          {data?.status !== "Processing refund" && data?.status !== "Refund Success" && ( <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-[250px] mt-2 border h-[40px]  rounded-[5px]"
        >
          {[
            "Processing",
            "Transferred to delivery partner",
            "Shipping",
            "Received",
            "On the way",
            "Delivered",
          ]
            .slice(
              [
                "Processing",
                "Transferred to delivery partner",
                "Shipping",
                "Received",
                "On the way",
                "Delivered",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      )}
      {
        data?.status === "Processing refund" || data?.status === "Refund Success" ? (
          <select value={status} 
       onChange={(e) => setStatus(e.target.value)}
       className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
      >
        {[
            "Processing refund",
            "Refund Success",
          ]
            .slice(
              [
                "Processing refund",
                "Refund Success",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
      </select>
        ) : null
      }

      <div
        className={`${styles.button} mt-5 !bg-[#000000] !rounded-[10px] text-[#ffffff] font-[500] !h-[45px] text-[18px]`}
        onClick={data?.status !== "Processing refund" ? orderUpdateHandler : refundOrderUpdateHandler}
      >
        Update Status
      </div>
      </div>
          </div>
      <div className="right-section rounded-xl" style={{ flex: 1, backgroundColor: '#CDB1D6' }}>
        {/* Konten bagian kanan */}
          <div className="mt-2 ml-2">
        <h4 className="pt-2 mb-1 text-[18px] font-[600]">Input Nomor Resi:</h4>
        <form className="resi-form" onSubmit={handleResiSubmit}>
          <input
            type="text"
            id="nomorResi"
            name="nomorResi"
            placeholder="Masukkan nomor resi"
            required
            value={nomorResi}
                onChange={(e) => setNomorResi(e.target.value)}
                style={{
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
    height: '40px', // Atur tinggi input di sini
    width: '250px',
  }}
          />
          <button
  type="submit"
  className={`${styles.button} mt-4 font-[600] text-[18px]`}
  style={{ backgroundColor: "black", color: "white" }}
>
  Submit Resi
</button>

        </form>
      </div>
      </div>
      </div>
      
      


      


    </div>
  );
};

export default OrderDetails;
