import React, { useState } from "react";
import styles from "../../styles/styles";
import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { calculateShippingCost } from "../../redux/reducers/alamat";


const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const dispatch = useDispatch();
  const [totalWeight, setTotalWeight] = useState(0);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingResponse, setShippingResponse] = useState(null);
  const navigate = useNavigate();
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");
  const [penerima, setPenerima] = useState("");
  const [ponselAktif, setPonselAktif] = useState(null);


  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProvinces();
    if (city) {
    handleShippingCost(); // Pastikan fungsi ini sudah didefinisikan dan dapat diakses
  }
  }, [city]);

  // hitung ongkir baru
  const calculateShippingCost = async (shippingData) => {
  try {
    const response = await axios.post(
      `${server}/alamat/shipping-cost`,
      shippingData
    );
    const shippingCosts = response.data.payload;
    // Access the cost property from the appropriate object in the array
     return shippingCosts; // Mengembalikan biaya pengiriman dari respons
  } catch (error) {
    console.error(error);
    // Handle error if calculating the shipping cost fails
    throw new Error("Gagal menghitung biaya pengiriman");
    }
  };

  const handleShippingCost = async () => {
  try {
    const shippingData = {
      origin: '115',
      destination: city,
      weight: calculateTotalWeight(),
    };

    const response = await calculateShippingCost(shippingData);
    setShippingResponse(response);
    console.log(response); // Tambahkan log untuk memeriksa respons

    if (Array.isArray(response) && response.length > 0) {
      const shippingCosts = response.map(item => ({
        service: item.service,
        description: item.description,
        cost: item.cost,
        etd: item.etd,
      }));

      setShippingCost(shippingCosts[0].cost); // Setel biaya pengiriman ke state
      setShippingOptions(shippingCosts); // Setel opsi pengiriman ke state
    } else {
      throw new Error('Invalid shipping cost response');
    }
  } catch (error) {
    console.error(error);
    toast.error('Failed to calculate shipping cost');
  }
};


// HITUNG BERAT
  const calculateTotalWeight = () => {
  let totalWeight = cart.reduce((accumulator, item) => {
    if (item.size && item.qty) {
      return accumulator + (item.size * item.qty);
    }
    return accumulator;
  }, 0);

  return totalWeight;
};

// FETCH GET PROVINCES
  const fetchProvinces = async () => {
  try {
    const response = await axios.get(`${server}/alamat/provinces`);
    setProvinces(response.data);
  } catch (error) {
    console.log(error);
    }
  };

// FETCH GET KOTA  
  const fetchCities = async (provinceId) => {
  try {
    const response = await axios.get(`${server}/alamat/cities/${provinceId}`);
    setCities(response.data);
  } catch (error) {
    console.log(error);
    }
  };


//PAYMENT SUBMIT [data yang dikirim when submit button]
  const paymentSubmit = () => {
  let errorMessage = "";

  if (address1 === "") {
    errorMessage += "Address 1 is required. ";
  }

  // if (address2 === "") {
  //   errorMessage += "Address 2 is required. ";
  // }

  if (zipCode === null) {
    errorMessage += "Zip Code is required. ";
  }


  if (city === "") {
    errorMessage += "City is required. ";
  }

  if (errorMessage !== "") {
    toast.error(errorMessage);
  } else {
    
    // KOMPONEN DARI shippingAddress [isi alamat that needed || perbaiki komponen yg sesuai rajaongkir] 
    const shippingAddress = {
      address1,
      // address2,
      zipCode,
      selectedCity,
      penerima,
      ponselAktif
      // country,
      // city,
    };

    //  KOMPONEN DATA ORDER [perbaiki bcs ada yg diganti]
    const orderData = {
      cart,
      totalPrice,
      subTotalPrice,
      shipping,
      discountPrice,
      shippingAddress,
      user,
    }

    // update local storage with the updated orders array
    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    navigate("/checkout-payment");
   }
  };


  // HITUNG HARGA SUBTOTAL [sesuai jumlah yg dibeli]
  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  // shipping cost variable [TIDAK DIPAKAI LAGI BCS PAKAI]
  // const shipping = subTotalPrice * 0.1;
  const shipping = shippingOptions[selectedOptionIndex]?.cost || 0;


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = couponCode;

    await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
      const shopId = res.data.couponCode?.shopId;
      const couponCodeValue = res.data.couponCode?.value;
      if (res.data.couponCode !== null) {
        const isCouponValid =
          cart && cart.filter((item) => item.shopId === shopId);

        if (isCouponValid.length === 0) {
          toast.error("Coupon code is not valid for this shop");
          setCouponCode("");
        } else {
          const eligiblePrice = isCouponValid.reduce(
            (acc, item) => acc + item.qty * item.price,
            0
          );
          const discountPrice = (eligiblePrice * couponCodeValue) / 100;
          setDiscountPrice(discountPrice);
          setCouponCodeData(res.data.couponCode);
          setCouponCode("");
        }
      }
      if (res.data.couponCode === null) {
        toast.error("Coupon code doesn't exists!");
        setCouponCode("");
      }
    });
  };

  const discountPercentenge = couponCodeData ? discountPrice : "";

  const totalPrice = couponCodeData
    ? (subTotalPrice + shipping - discountPercentenge).toFixed(2)
    : (subTotalPrice + shipping).toFixed(2);

  console.log(discountPercentenge);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            user={user}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            zipCode={zipCode}
            setZipCode={setZipCode}
            penerima={penerima}
            setPenerima={setPenerima}
            ponselAktif={ponselAktif}
            setPonselAktif={setPonselAktif}
          />
          {/* {shippingOptions && shippingOptions.length > 0 && (
  <div className="w-[90%] 1000px:w-[90%] bg-white rounded-md p-5 mt-8 mr-80">
    <h4>Pengiriman:</h4>
    <select
  className="border rounded-md h-[60px] w-[350px] mt-2"
  value={selectedOptionIndex}
  onChange={(e) => setSelectedOptionIndex(parseInt(e.target.value))}
>
  {shippingOptions.map((option, index) => (
    <option key={index} value={index}>
      Ongkos Kirim: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(option.cost)}
 | {option.service} | {option.etd} hari
    </option>
  ))}
</select>

  </div>
)} */}
          
          {/* Versi untuk Layar Responsif */}
      {shippingOptions && shippingOptions.length > 0 && (
        <div className="w-full bg-white rounded-md p-5 mt-4 md:ml-4 lg:ml-80">
          <h4 className="text-lg">Pengiriman:</h4>
          <select
            className="border rounded-md h-[50px] md:h-[60px] w-full md:w-[350px] lg:w-[450px] mt-2 md:mt-3 text-base md:text-lg"
            value={selectedOptionIndex}
            onChange={(e) => setSelectedOptionIndex(parseInt(e.target.value))}
          >
            {shippingOptions.map((option, index) => (
              <option key={index} value={index}>
                Ongkos Kirim: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(option.cost)}
                | {option.service} | {option.etd} hari
              </option>
            ))}
          </select>
        </div>
      )}
          

        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData
            handleSubmit={handleSubmit}
            totalPrice={totalPrice}
            shipping={shipping}
            subTotalPrice={subTotalPrice}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            discountPercentenge={discountPercentenge}
            shippingCost={shippingCost} // Tambahkan properti shippingCost
          />
        </div>
      </div>
      <div
        className={`${styles.button} w-[150px] 800px:w-[280px] mt-10`}
        onClick={paymentSubmit}
      >
        <h5 className="text-white">Lanjut Pembayaran</h5>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  user,
  setCountry,
  setCity,
  city,
  userInfo,
  setUserInfo,
  setAddress1,
  address1,
  setAddress2,
  address2,
  zipCode,
  setZipCode,
  penerima,
  setPenerima,
  ponselAktif,
  setPonselAktif,
  totalWeight,
  handleShippingCost,
  shippingResponse
}) => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [shippingCost, setShippingCost] = useState(0); // Tambahkan inisialisasi shippingCost dengan nilai awal 0
  const [originCityId, setOriginCityId] = useState(""); // Tambahkan state untuk ID kota asal
  const [estimatedService, setEstimatedService] = useState("");
  const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);

  useEffect(() => {
    fetchProvinces();
  }, []);


  const fetchProvinces = async () => {
  try {
    const response = await axios.get(`${server}/alamat/provinces`);
    setProvinces(response.data);
    // Setelah mendapatkan data provinsi, ambil data kota dengan ID provinsi yang dipilih (misalnya ID provinsi 1)
    if (response.data.length > 0) {
      fetchCities(response.data[0].province_id);
    }
  } catch (error) {
    console.error(error);
    }
  };

  const fetchCities = async provinceId => {
    try {
      const response = await axios.get(`${server}/alamat/cities/${provinceId}`);
      setCities(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (cityId) => {
    setCity(cityId);  //Memperbarui state city dengan nilai cityId yang dipilih
    
  };

  

  return (
    <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
  <h5 className="text-[18px] font-[500]">Shipping Address</h5>
  <br />
  <form>
    <div className="w-full flex pb-3">
      <div className="w-[50%]">
        <label className="block pb-2">Nama</label>
        <input
          type="text"
          value={user && user.name}
          required
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
      </div>
      <div className="w-[50%]">
        <label className="block pb-2">Email</label>
        <input
          type="email"
          value={user && user.email}
          required
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
      </div>
    </div>

    <div className="w-full flex pb-3">
      

          <div className="w-[50%]">
        <label className="block pb-2">Nomor ponsel aktif</label>
        <input
              type="number"
              value={ponselAktif}
              onChange={(e) => setPonselAktif(e.target.value)}
          required
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
      </div>
          
      <div className="w-[50%]">
        <label className="block pb-2">Kode Pos</label>
        <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
          required
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
      </div>
    </div>

    <div className="w-full flex pb-3">
      <div className="w-[50%]">
        <div className="relative inline-flex">
          <select
            className="bg-white appearance-none border border-gray-300 rounded-[5px] py-2 pl-3 pr-8 leading-tight focus:outline-none focus:ring w-[95%]"
            onChange={(e) => fetchCities(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Provinsi
            </option>
            {provinces.map((province) => (
              <option key={province.province_id} value={province.province_id}>
                {province.province}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="relative inline-flex">
          <select
            className="bg-white appearance-none border border-gray-300 rounded-[5px] py-2 pl-3 pr-8 leading-tight focus:outline-none focus:ring w-[100%]"
            onChange={(e) => handleCityChange(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Kota
            </option>
            {cities.map((city) => (
              <option key={city.city_id} value={city.city_id}>
                {city.city_name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
        </div>

    <div className="w-full flex pb-3">
      <div className="w-[50%]">
        <label className="block pb-2">Alamat Lengkap</label>
        <input
          type="address"
          required
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
          </div>
          
                    <div className="w-[50%]">
        <label className="block pb-2">Nama Penerima</label>
        <input
              type="string"
              value={penerima}
              onChange={(e) => setPenerima(e.target.value)}
          required
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
      </div>
      {/* <div className="w-[50%]">
        <label className="block pb-2">Patokan Alamat</label>
        <input
          type="address"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          required
          className="w-[95%] border h-[40px] rounded-[5px]"
        />
      </div> */}
    </div>

    <h5
      className="text-[20px] stroke-indigo-400 cursor-pointer inline-block "
      onClick={() => setUserInfo(!userInfo)}
    >
      Pilih alamat yang tersimpan
    </h5>
    {userInfo && (
      <div>
        {user &&
          user.addresses.map((item, index) => (
            <div className="w-full flex mt-1" key={index}>
              <input
                type="checkbox"
                className="mr-3"
                value={item.addressType}
                onClick={() =>
                  setAddress1(item.address1) ||
                  setAddress2(item.address2) ||
                  setZipCode(item.zipCode) ||
                  setCountry(item.country) ||
                  setCity(item.city)
                }
              />
              <h2>{item.addressType}</h2>
            </div>
          ))}
      </div>
    )}
  </form>
</div>

  );
};


const CartData = ({
  handleSubmit,
  totalPrice,
  shipping,
  subTotalPrice,
  couponCode,
  setCouponCode,
  discountPercentenge,
}) => {
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(subTotalPrice)}</h5>

      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Pengiriman:</h3>
        <h5 className="text-[18px] font-[600]">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(shipping)}</h5>

      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Kode Promo:</h3>
      <h5 className="text-[18px] font-[600]">
  - {discountPercentenge ? " " + new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(discountPercentenge) : null}
</h5>


      </div>
      {/* <h5 className="text-[18px] font-[600] text-end pt-3">Rp </h5> */}
      <h5 className="text-[18px] font-[600] text-end pt-3">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}</h5>

      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${styles.input} h-[40px] pl-2`}
          placeholder="Kode Promo"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          className={`w-full h-[40px] border border-[#f63b60] text-center text-[#f63b60] rounded-[3px] mt-8 cursor-pointer`}
          required
          value="Gunakan Kode Promo"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Checkout;
