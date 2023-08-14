import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/styles";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { backend_url, server } from "../server";
import { RxCross1 } from "react-icons/rx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const UserOrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [rating, setRating] = useState(1);
  const [resi, setResi] = useState(""); // State untuk menyimpan nomor resi

  const { id } = useParams();

   useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));

    // Panggil fungsi untuk mendapatkan nomor resi saat komponen ini dirender
    axios
      .get(`${server}/order/get-resi/${id}`)
      .then((res) => {
        setResi(res.data.resi); // Simpan nomor resi ke state jika berhasil didapatkan dari backend
      })
      .catch((error) => {
        console.error(error);
        setResi(""); // Set state nomor resi menjadi kosong jika terjadi kesalahan saat mengambil nomor resi dari backend
      });
  }, [dispatch, id, user._id]);

  const data = orders && orders.find((item) => item._id === id);

  const reviewHandler = async (e) => {
    await axios
      .put(
        `${server}/product/create-new-review`,
        {
          user,
          rating,
          comment,
          productId: selectedItem?._id,
          orderId: id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.message);
        dispatch(getAllOrdersOfUser(user._id));
        setComment("");
        setRating(null);
        setOpen(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  
  const refundHandler = async () => {
    await axios.put(`${server}/order/order-refund/${id}`,{
      status: "Processing refund"
    }).then((res) => {
       toast.success(res.data.message);
    dispatch(getAllOrdersOfUser(user._id));
    }).catch((error) => {
      toast.error(error.response.data.message);
    })
  };

  const hrStyle = {
    width: '100%', // Atur lebar garis (misalnya 50% dari lebar wadah)
    height: '3px', // Atur tebal garis (misalnya 4 piksel)
    background: 'gray', // Warna garis (misalnya hitam)
    border: 'none', // Hilangkan garis tepi
    margin: '2px 0', // Atur margin atas dan bawah
  };

  return (
    <div className={`py-4  min-h-screen w-11/12 mx-auto`}>
      <div className="flex items-center">
              <BsFillBagFill size={30} color="crimson" />
              <h1 className="pl-2 text-[25px]">Rincian Pesanan</h1>
            </div>
      <div className="container mx-auto grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
        <div className="left-section mt-4 rounded-xl  w-[300px]" style={{ backgroundColor: '#FFFCF5' }}>
        {/* Konten bagian kiri */}
        
          
          <div className="ml-3 pt-3">
            <h5 className="text-[#00000084]">
              ID Pesanan: <span>#{data?._id?.slice(0, 8)}</span>
            </h5>
        
            <h5 className="text-[#00000084]">
              Placed on: <span>{data?.createdAt?.slice(0, 10)}</span>
            </h5>
            
            <h4>
            Status pembayaran:{" "}
              {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
            </h4>
            
            {/* RESI */}
            {resi && (
                <h4 className=" text-[16px] font-[400]">Nomor Resi: {resi}</h4>
            )}
          </div>
          <br />

          <hr style={hrStyle}  />
          
          <div className="ml-3 mt-1">
            <h4 className="pt-2 text-[19px] font-[600]">Alamat Pengiriman</h4>
            <h4 className=" pt-2 text-[17px]">{data?.shippingAddress.penerima}</h4>
            <h4 className="text-[17px]">{data?.shippingAddress.address1}</h4>
            
            <h4 className=" text-[17px]">Kode Pos: {data?.shippingAddress.zipCode}</h4>
            <h4 className=" text-[17px]">Ponsel: {data?.shippingAddress.ponselAktif}</h4>
          </div>
          
          
          <div className="w-full 800px:w-[40%]">
          
          
          <br />
           {
            data?.status === "Delivered" && (
              <div className={` ml-10 w-[200px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer' text-white`}
              onClick={refundHandler}
              >Ajukan Pengembalian</div>
            )
           }
        </div>
      
     
      <Link to="/inbox?648316eb8eca248d036818ef">
        <div className={` ml-10 w-[200px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer' text-white`}>Kirim Pesan</div>
      </Link>
      <br />
        </div>
        
        {/* batas konten kanan */}
        <div className="right-section mt-4 mx-1 lg:mx-10 rounded-xl lg:w-[800px]" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Konten bagian kanan */}
        
          {/* order items */}
          <br />
          <br />
          <div className="ml-5 mr-5">
    {data && data?.cart.map((item, index) => {
      return (
        <div key={index} className="w-full flex items-start mb-5">
          <img
            src={`${item.images[0]?.url}`}
            alt=""
            className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[120px]"
          />
          <div className="w-full">
            <h5 className="pl-3  text-[13px] md:text-[15px] md:pt-6 lg:text-[18px]">{item.name}</h5>
            <h5 className="pl-3 text-[13px] md:text-[17px] lg:text-[18px] text-[#00000091]">
              {item.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })} x {item.qty}
            </h5>
          </div>
          {!item.isReviewed && data?.status === "Delivered" && (
            <div
              className={`ml-12 w-[200px] bg-black h-[40px] my-3 flex items-center justify-center rounded-xl cursor-pointer text-white text-[10px] md:text-[14px] lg:text-[14px] text-center`}
              onClick={() => setOpen(true) || setSelectedItem(item)}
            >
              Beri Rating & Ulasan
            </div>
          )}
        </div>
      );
    })}
  </div>
      

      {/* review popup */}
      {open && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[#0005] rounded-lg w-full sm:max-w-md mx-auto">
          <div className= "bg-white rounded-lg p-6" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex justify-end">
              <RxCross1
                size={30}
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-[20px] font-[500] font-Poppins text-center">
              Rating & Ulasan
            </h2>
                <br />
                
            <div className="w-full flex">
              <img
                src={`${selectedItem?.images[0]?.url}`} 
                alt=""
                className="w-[80px] h-[80px]"
              />
              <div>
                <div className="pl-3 pt-3 text-[15px]">{selectedItem?.name}</div>
                <h4 className="pl-3 text-[15px]">
                  {selectedItem.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })} x {selectedItem?.qty}
                </h4>
              </div>
            </div>

            <br />
            <br />

            {/* ratings */}
            <h5 className="pl-3 text-[16px] font-[500]">
              Beri Rating <span className="text-red-500">*</span>
            </h5>
            <div className="flex w-full ml-2 pt-1">
              {[1, 2, 3, 4, 5].map((i) =>
                rating >= i ? (
                  <AiFillStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={25}
                    onClick={() => setRating(i)}
                  />
                ) : (
                  <AiOutlineStar
                    key={i}
                    className="mr-1 cursor-pointer"
                    color="rgb(246,186,0)"
                    size={25}
                    onClick={() => setRating(i)}
                  />
                )
              )}
            </div>
            <br />
            <div className="w-full ml-3">
              <label className="block text-[16px] font-[500]">
                Tulis Ulasan
                <span className="ml-1 font-[400] text-[16px] text-[#00000052]">
                  (optional)
                </span>
              </label>
              <textarea
                name="comment"
                id=""
                cols="20"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder=""
                className="mt-2 w-[95%] border p-2 outline-none"
              ></textarea>
            </div>
            <div
              className={`${styles.button} text-white text-[20px] ml-20`}
              onClick={rating > 1 ? reviewHandler : null}
            >
              Kirim
                </div>
                

          </div>
        </div>
          )}

          <div className="pl-3 text-[#00000084] border-t">
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
    <span style={{ color: "black", fontSize: "15px" }}>
      {data?.shipping
        ? new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.shipping)
        : "-"}
    </span>
  </h5>

  <h5>
    Kode Promo: -{""}
    <span style={{ color: "black", fontSize: "15px" }}>
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
            <h5 className="pt-3 mr-5 text-[15px] md:text-[18px] lg:text-[18px]">
              Total Price: <strong>{data?.totalPrice && new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.totalPrice)}</strong>
            </h5>
          </div>
        </div>
      </div>


      {/* ini batasan sebelum flex */}
      

      

      

      
      <br />
      <br />
      
      
      <br />
    </div>
  );
};

export default UserOrderDetails;
