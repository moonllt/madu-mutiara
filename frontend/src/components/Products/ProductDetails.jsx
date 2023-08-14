// import React, { useEffect, useState } from "react";
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";
// import Ratings from "./Ratings";
// import axios from "axios";

// const ProductDetails = ({ data }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { user, isAuthenticated } = useSelector((state) => state.user);
//   const { products } = useSelector((state) => state.products);
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
//   const [selectedWeight, setSelectedWeight] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [select, setSelect] = useState(0);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllProductsShop(data && data?.shop._id));
//     if (wishlist && wishlist.find((i) => i._id === data?._id)) {
//       setClick(true);
//     } else {
//       setClick(false);
//     }
//   }, [data, wishlist]);

//   useEffect(() => {
//     if (selectedWeight) {
//       // Dapatkan option berdasarkan selectedWeight
//       const selectedOption = data.options.find(
//         (option) => option.weight === selectedWeight
//       );

//       if (selectedOption) {
//         // Perbarui harga dan stok yang ditampilkan
//         setSelectedOption(selectedOption);
//       }
//     }
//   }, [selectedWeight]);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const removeFromWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(removeFromWishlist(data));
//   };

//   const addToWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(addToWishlist(data));
//   };

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i._id === id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (selectedOption && selectedOption.stock < 1) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: count };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   };

//   const totalReviewsLength =
//     products &&
//     products.reduce((acc, product) => acc + product.reviews.length, 0);

//   const totalRatings =
//     products &&
//     products.reduce(
//       (acc, product) =>
//         acc +
//         product.reviews.reduce((sum, review) => sum + review.rating, 0),
//       0
//     );

//   const avg = totalRatings / totalReviewsLength || 0;

//   const averageRating = avg.toFixed(2);

//   const handleMessageSubmit = async () => {
//     if (isAuthenticated) {
//       const groupTitle = data._id + user._id;
//       const userId = user._id;
//       const sellerId = data.shop._id;
//       await axios
//         .post(`${server}/conversation/create-new-conversation`, {
//           groupTitle,
//           userId,
//           sellerId,
//         })
//         .then((res) => {
//           navigate(`/inbox?${res.data.conversation._id}`);
//         })
//         .catch((error) => {
//           toast.error(error.response.data.message);
//         });
//     } else {
//       toast.error("Please login to create a conversation");
//     }
//   };

//   const handleWeightChange = (event) => {
//     const weight = event.target.value;
//     setSelectedWeight(weight);
//   };

//   return (
//     <div className="bg-white">
//       {data ? (
//         <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
//           <div className="w-full py-8">
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-[50%]">
//                 <img
//                   src={`${backend_url}${data && data.images[select]}`}
//                   alt=""
//                   className="w-[80%] mx-auto md:mx-0"
//                 />
//                 <div className="flex justify-center mt-4">
//                   {data &&
//                     data.images.map((i, index) => (
//                       <div
//                         key={index}
//                         className={`cursor-pointer border ${
//                           select === index ? "border-primary" : ""
//                         }`}
//                       >
//                         <img
//                           src={`${backend_url}${i}`}
//                           alt=""
//                           className="h-[80px] w-auto mx-2 mt-2"
//                           onClick={() => setSelect(index)}
//                         />
//                       </div>
//                     ))}
//                 </div>
//               </div>

//               <div className="md:w-[50%] pt-10 md:pl-8">
//                 <h1 className={`${styles.productTitle}`}>{data.name}</h1>
//                 <p>{data.description}</p>

//                 {/* Pilihan Berat */}
//                 <div className="mt-4">
//                   <label htmlFor="weight">Weight:</label>
//                   <select
//                     id="weight"
//                     value={selectedWeight}
//                     onChange={handleWeightChange}
//                     className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                   >
//                     <option value="">Select Weight</option>
//                     {data.options.map((option) => (
//                       <option key={option._id} value={option.weight}>
//                         {option.weight} gram
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Informasi Harga dan Stok */}
//                 {selectedWeight && selectedOption && (
//                   <div className="mt-4">
//                     <p className="text-lg font-medium text-black">
//                       Price: Rp {selectedOption.price}
//                     </p>
//                     <p className="text-lg font-medium text-black">
//                       Stock: {selectedOption.stock}
//                     </p>
//                   </div>
//                 )}

//                 {/* Tombol Tambah dan Kurangi Jumlah */}
//                 <div className="flex items-center mt-6">
//                   <button
//                     className="text-primary hover:text-primary-dark focus:outline-none"
//                     onClick={decrementCount}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20 12H4"
//                       />
//                     </svg>
//                   </button>

//                   <span className="text-lg mx-4">{count}</span>

//                   <button
//                     className="text-primary hover:text-primary-dark focus:outline-none"
//                     onClick={incrementCount}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Tombol Wishlist dan Cart */}
//                 <div className="flex items-center space-x-4 mt-6">
//                   {isAuthenticated ? (
//                     <div
//                       className="cursor-pointer"
//                       onClick={
//                         click
//                           ? () => removeFromWishlistHandler(data)
//                           : () => addToWishlistHandler(data)
//                       }
//                     >
//                       {click ? (
//                         <AiFillHeart className="text-primary text-2xl" />
//                       ) : (
//                         <AiOutlineHeart className="text-primary text-2xl" />
//                       )}
//                     </div>
//                   ) : (
//                     <Link to="/login">
//                       <AiOutlineHeart className="text-primary text-2xl cursor-pointer" />
//                     </Link>
//                   )}

//                   <div
//                     className="cursor-pointer"
//                     onClick={() => addToCartHandler(data._id)}
//                   >
//                     <AiOutlineShoppingCart className="text-primary text-2xl" />
//                   </div>

//                   <div
//                     className="cursor-pointer"
//                     onClick={handleMessageSubmit}
//                   >
//                     <AiOutlineMessage className="text-primary text-2xl" />
//                   </div>
//                 </div>

//                 {/* Rating dan Review */}
//                 <div className="flex items-center mt-6">
//                   <Ratings value={averageRating} />
//                   <p className="ml-2 text-sm text-gray-500">
//                     ({totalReviewsLength} Reviews)
//                   </p>
//                 </div>

//                 {/* Deskripsi Produk */}
//                 <div className="mt-4">
//                   <h3 className="text-xl font-semibold">Product Details:</h3>
//                   <p>{data.details}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;


// -------------------------------------------------------------------------------------
// // INI UDAH OKE TAPI PRICE DAN STOCK HANYA MUNCUL OBJECT PERTAMA ARRAY
// import React, { useEffect, useState } from "react";
// // import {
// //   AiFillHeart,
// //   AiOutlineHeart,
// //   AiOutlineMessage,
// //   AiOutlineShoppingCart,
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";
// import Ratings from "./Ratings";
// import axios from "axios";

// const ProductDetails = ({ data }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { user, isAuthenticated } = useSelector((state) => state.user);
//   const { products } = useSelector((state) => state.products);
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
//   const [selectedWeight, setSelectedWeight] = useState("");
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [select, setSelect] = useState(0);
//   const [price, setPrice] = useState(null);
//   const [stock, setStock] = useState(null);


//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Lakukan permintaan API atau operasi lain untuk mendapatkan data.options
//       const response = await fetch('${server}/product/get-all-products-shop/${id}');
//       const data = await response.json();
      
//       // Setelah mendapatkan data.options, cek dan log informasi setiap objek opsi
//       if (data && data.options) {
//         data.options.forEach((option) => {
//           console.log("Weight:", option.weight);
//           console.log("Price:", option.price);
//           console.log("Stock:", option.stock);
//         });

//         // Lakukan pengecekan atau manipulasi data.options sesuai dengan selectedWeight
//         const selectedOption = data.options.find((option) => option.weight === selectedWeight);
//         if (selectedOption) {
//           setPrice(selectedOption.price);
//           setStock(selectedOption.stock);
//         } else {
//           setPrice(null);
//           setStock(null);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching options:', error);
//     }
//   };
  
//   // Panggil fungsi fetchData untuk mengambil data.options
//     fetchData();
//   }, [selectedWeight]);

  
//   useEffect(() => {
//     dispatch(getAllProductsShop(data && data?.shop._id));
//     if (wishlist && wishlist.find((i) => i._id === data?._id)) {
//       setClick(true);
//     } else {
//       setClick(false);
//     }
//   }, [data, wishlist]);

//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Lakukan permintaan API atau operasi lain untuk mendapatkan data.options
//       const response = await fetch('https://api.example.com/options');
//       const data = await response.json();
      
//       // Setelah mendapatkan data.options, cek dan log informasi setiap objek opsi
//       if (data && data.options) {
//         data.options.forEach((option) => {
//           console.log("Weight:", option.weight);
//           console.log("Price:", option.price);
//           console.log("Stock:", option.stock);
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching options:', error);
//     }
//   };
  
//   // Panggil fungsi fetchData untuk mengambil data.options
//     fetchData();
//   }, []);

  
//   useEffect(() => {
//   if (selectedWeight && data && data.options && data.options.length > 0) {
//     const selectedOption = data.options.find((option) => option.weight === selectedWeight);
//     if (selectedOption) {
//       setPrice(selectedOption.price);
//       setStock(selectedOption.stock);
//     } else {
//       setPrice(data.options[0].price);
//       setStock(data.options[0].stock);
//     }
//   } else {
//     setPrice(null);
//     setStock(null);
//     }
//   }, [selectedWeight, data]);





//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const removeFromWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(removeFromWishlist(data));
//   };

//   const addToWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(addToWishlist(data));
//   };

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i._id === id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (data.stock < 1) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: count };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   };

//   const totalReviewsLength =
//     products &&
//     products.reduce((acc, product) => acc + product.reviews.length, 0);

//   const totalRatings =
//     products &&
//     products.reduce(
//       (acc, product) =>
//         acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
//       0
//     );

//   const avg = totalRatings / totalReviewsLength || 0;

//   const averageRating = avg.toFixed(2);

//   const handleMessageSubmit = async () => {
//     if (isAuthenticated) {
//       const groupTitle = data._id + user._id;
//       const userId = user._id;
//       const sellerId = data.shop._id;
//       await axios
//         .post(`${server}/conversation/create-new-conversation`, {
//           groupTitle,
//           userId,
//           sellerId,
//         })
//         .then((res) => {
//           navigate(`/inbox?${res.data.conversation._id}`);
//         })
//         .catch((error) => {
//           toast.error(error.response.data.message);
//         });
//     } else {
//       toast.error("Please login to create a conversation");
//     }
//   };


//   const handleWeightChange = (event) => {
//     setSelectedWeight(event.target.value);
//   };
//   // // const handleWeightChange = (event) => {
//   // // const weight = event.target.value;
//   // // setSelectedWeight(weight);

//   // // Cari opsi yang sesuai dengan berat yang dipilih
//   // const option = data.options.find((opt) => opt.weight === weight);
//   //   setSelectedOption(option);
//   // };


//  // OPSI LAIN
//   // const handleWeightChange = (event) => {
//   // const weight = event.target.value;
//   // setSelectedWeight(weight);
//   // const option = data.options.find((opt) => opt.weight === weight);
//   //   setSelectedOption(option);
//   // };


//   return (
//     <div className="bg-white">
//       {data ? (
//         <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
//           <div className="w-full py-8">
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-[50%]">
//                 <img
//                   src={`${backend_url}${data && data.images[select]}`}
//                   alt=""
//                   className="w-[80%] mx-auto md:mx-0"
//                 />
//                 <div className="flex justify-center mt-4">
//                   {data &&
//                     data.images.map((i, index) => (
//                       <div
//                         key={index}
//                         className={`cursor-pointer border ${
//                           select === index ? "border-primary" : ""
//                         }`}
//                       >
//                         <img
//                           src={`${backend_url}${i}`}
//                           alt=""
//                           className="h-[80px] w-auto mx-2 mt-2"
//                           onClick={() => setSelect(index)}
//                         />
//                       </div>
//                     ))}
//                 </div>
//               </div>

//               <div className="md:w-[50%] pt-10 md:pl-8">
//                 <h1 className={`${styles.productTitle}`}>{data.name}</h1>
//                 <p>{data.description}</p>

//                 {/* Pilihan Berat */}
//       <div className="mt-4">
//         <label htmlFor="weight">Weight:</label>
//         <select
//           id="weight"
//           value={selectedWeight}
//           onChange={handleWeightChange}
//           className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//         >
//           <option value="">Select Weight</option>
//     {data && data.options && (
//       data.options.map((option) => (
//         <option key={option._id} value={option.weight}>
//           {option.weight} gram
//         </option>
//       ))
//     )}
//         </select>
//       </div>

//       {/* Informasi Harga dan Stok */}
//                 {selectedWeight && data && data.options && (
//                   <div className="mt-4">
//                     <p className="text-lg font-medium text-black">
//                       Price: Rp {data.options[0].price}
//                     </p>
//                     <p className="text-lg font-medium text-black">
//                       Stock: {data.options[0].stock}
//                     </p>
//                   </div>
//                 )}




//                 {/* Tombol Tambah dan Kurangi Jumlah */}
//                 <div className="flex items-center mt-6">
//                   <button
//                     className="text-primary hover:text-primary-dark focus:outline-none"
//                     onClick={decrementCount}
//                   >

//             <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20 12H4"
//                       />
//                     </svg>
//                   </button>
//                   <span className="text-gray-800 text-lg px-4">{count}</span>
//                   <button
//                     className="text-primary hover:text-primary-dark focus:outline-none"
//                     onClick={incrementCount}
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Tombol Wishlist */}
//                 <div className="flex items-center mt-6">
//                   {click ? (
//                     <AiFillHeart
//                       size={30}
//                       className="cursor-pointer"
//                       onClick={() => removeFromWishlistHandler(data)}
//                       color="red"
//                       title="Remove from wishlist"
//                     />
//                   ) : (
//                     <AiOutlineHeart
//                       size={30}
//                       className="cursor-pointer"
//                       onClick={() => addToWishlistHandler(data)}
//                       color="#333"
//                       title="Add to wishlist"
//                     />
//                   )}
//                 </div>

//                 {/* Tombol Tambah ke Keranjang */}
//                 <div className="flex items-center mt-6">
//                   <button
//                     className="w-full py-2 px-4 bg-primary text-blackS rounded-lg shadow-md hover:bg-primary-dark focus:outline-none"
//                     onClick={() => addToCartHandler(data._id)}
//                   >
//                     Add to Cart <AiOutlineShoppingCart className="ml-1" />
//                   </button>
//                 </div>

//                 {/* Tombol Kirim Pesan */}
//                 <div className="flex items-center mt-6">
//                   <button
//                     className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
//                     onClick={handleMessageSubmit}
//                   >
//                     Send Message <AiOutlineMessage className="ml-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
  
// };

// export default ProductDetails;

// -------------------------------------------
// INI YG PERTAMA/AWAL
// import React, { useEffect, useState } from "react";
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { backend_url, server } from "../../server";
// import styles from "../../styles/styles";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";
// import Ratings from "./Ratings";
// import axios from "axios";

// const ProductDetails = ({ data }) => {
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { user, isAuthenticated } = useSelector((state) => state.user);
//   const { products } = useSelector((state) => state.products);
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
//   const [select, setSelect] = useState(0);
//   const [selectedWeight, setSelectedWeight] = useState("")
//   const [selectedOption, setSelectedOption] = useState(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProductsShop(data && data?.shop._id));
//     if (wishlist && wishlist.find((i) => i._id === data?._id)) {
//       setClick(true);
//     } else {
//       setClick(false);
//     }
//   }, [data, wishlist]);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const removeFromWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(removeFromWishlist(data));
//   };

//   const addToWishlistHandler = (data) => {
//     setClick(!click);
//     dispatch(addToWishlist(data));
//   };

//   const addToCartHandler = (id) => {
//     const isItemExists = cart && cart.find((i) => i._id === id);
//     if (isItemExists) {
//       toast.error("Item already in cart!");
//     } else {
//       if (data.stock < 1) {
//         toast.error("Product stock limited!");
//       } else {
//         const cartData = { ...data, qty: count };
//         dispatch(addTocart(cartData));
//         toast.success("Item added to cart successfully!");
//       }
//     }
//   };

//   const totalReviewsLength =
//     products &&
//     products.reduce((acc, product) => acc + product.reviews.length, 0);

//   const totalRatings =
//     products &&
//     products.reduce(
//       (acc, product) =>
//         acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
//       0
//     );

//   const avg =  totalRatings / totalReviewsLength || 0;

//   const averageRating = avg.toFixed(2);


//   const handleMessageSubmit = async () => {
//     if (isAuthenticated) {
//       const groupTitle = data._id + user._id;
//       const userId = user._id;
//       const sellerId = data.shop._id;
//       await axios
//         .post(`${server}/conversation/create-new-conversation`, {
//           groupTitle,
//           userId,
//           sellerId,
//         })
//         .then((res) => {
//           navigate(`/inbox?${res.data.conversation._id}`);
//         })
//         .catch((error) => {
//           toast.error(error.response.data.message);
//         });
//     } else {
//       toast.error("Please login to create a conversation");
//     }
//   };

//  const handleWeightChange = (event) => {
//     const weight = event.target.value;
//     setSelectedWeight(weight);
//     const option = data.options.find((opt) => opt.weight === weight);
//     setSelectedOption(option);
//   };

 

//   return (
//     <div className="bg-white">
//       {data ? (
//         <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
//           <div className="w-full py-8">
//             <div className="block w-full 800px:flex">
//               <div className="w-full 800px:w-[50%]">
//                 <img
//                   src={`${backend_url}${data && data.images[select]}`}
//                   alt=""
//                   className="w-[80%]"
//                 />
//                 <div className="w-full flex">
//                   {data &&
//                     data.images.map((i, index) => (
//                       <div
//                         className={`${
//                           select === 0 ? "border" : "null"
//                         } cursor-pointer`}
//                       >
//                         <img
//                           src={`${backend_url}${i}`}
//                           alt=""
//                           className="h-[80px] overflow-hidden mr-2 mt-2"
//                           onClick={() => setSelect(index)}
//                         />
//                       </div>
//                     ))}
//                   <div
//                     className={`${
//                       select === 1 ? "border" : "null"
//                     } cursor-pointer`}
//                   ></div>
//                 </div>
//               </div>

//             {/* OPSI PILIH BERAT   */}
//     <div>
//       <div>
//         <label htmlFor="weight">Weight:</label>
//         <select id="weight" value={selectedWeight} onChange={handleWeightChange}>
//           <option value="">Select Weight</option>
//           {data.options.map((option, index) => (
//             <option key={option._id.$oid} value={option.weight}>
//               {option.weight} grams
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedOption && (
//         <div>
//           <p>Price: Rp {selectedOption.price}</p>
//           <p>Stock: {selectedOption.stock}</p>
//           <button>Select Option</button>
//         </div>
//       )}
//               </div>
              
//               <div>
//       <div>
//         <label htmlFor="weight">Weight:</label>
//         <select
//           id="weight"
//           value={selectedWeight}
//           onChange={handleWeightChange}
//         >
//           <option value="">Select Weight</option>
//           {data.options.map((option, index) => (
//             <option key={option._id.$oid} value={option.weight}>
//               {option.weight} grams
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedOption && (
//         <div>
//           <p>Price: Rp {selectedOption.price}</p>
//           <p>Stock: {selectedOption.stock}</p>
//           <button>Select Option</button>
//         </div>
//       )}
//     </div>


//               <div className="w-full 800px:w-[50%] pt-5">
//                 <h1 className={`${styles.productTitle}`}>{data.name}</h1>
//                 <p>{data.description}</p>
//                 <div className="flex pt-3">
//                   <h3 className={`Rp {styles.price}`}>
//                     {"Rp " + data.originalPrice}
//                   </h3>
//                 </div>

//                 <div className="flex items-center mt-12 justify-between pr-3">
//                   <div>
//                     <button
//                       className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                       onClick={decrementCount}
//                     >
//                       -
//                     </button>
//                     <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
//                       {count}
//                     </span>
//                     <button
//                       className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
//                       onClick={incrementCount}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <div>
//                     {click ? (
//                       <AiFillHeart
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => removeFromWishlistHandler(data)}
//                         color={click ? "red" : "#333"}
//                         title="Remove from wishlist"
//                       />
//                     ) : (
//                       <AiOutlineHeart
//                         size={30}
//                         className="cursor-pointer"
//                         onClick={() => addToWishlistHandler(data)}
//                         color={click ? "red" : "#333"}
//                         title="Add to wishlist"
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div
//                   className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
//                   onClick={() => addToCartHandler(data._id)}
//                 >
//                   <span className="text-white flex items-center">
//                     Add to cart <AiOutlineShoppingCart className="ml-1" />
//                   </span>
//                 </div>
//                 <div className="flex items-center pt-8">
//                   <div
//                     className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
//                     onClick={handleMessageSubmit}
//                   >
//                     <span className="text-white flex items-center">
//                       Send Message <AiOutlineMessage className="ml-1" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ProductDetailsInfo
//             data={data}
//             products={products}
//             totalReviewsLength={totalReviewsLength}
//             averageRating={averageRating}
//           />
//           <br />
//           <br />
//         </div>
//       ) : null}
//     </div>
//   );
// };

// const ProductDetailsInfo = ({
//   data,
//   products,
//   totalReviewsLength,
//   averageRating,
// }) => {
//   const [active, setActive] = useState(1);

//   return (
//     <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
//       <div className="w-full flex justify-between border-b pt-10 pb-2">
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[x]"
//             }
//             onClick={() => setActive(1)}
//           >
//             Product Details
//           </h5>
//           {active === 1 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
//         <div className="relative">
//           <h5
//             className={
//               "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[x]"
//             }
//             onClick={() => setActive(2)}
//           >
//             Product Reviews
//           </h5>
//           {active === 2 ? (
//             <div className={`${styles.active_indicator}`} />
//           ) : null}
//         </div>
        
//       </div>
//       {active === 1 ? (
//         <>
//           <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
//             {data.description}
//           </p>
//         </>
//       ) : null}

//       {active === 2 ? (
//         <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
//           {data &&
//             data.reviews.map((item, index) => (
//               <div className="w-full flex my-2">
//                 <img
//                   src={`${backend_url}/${item.user.avatar}`}
//                   alt=""
//                   className="w-[50px] h-[50px] rounded-full"
//                 />
//                 <div className="pl-2 ">
//                   <div className="w-full flex items-center">
//                     <h1 className="font-[500] mr-3">{item.user.name}</h1>
//                     <Ratings rating={data?.ratings} />
//                   </div>
//                   <p>{item.comment}</p>
//                 </div>
//               </div>
//             ))}

//           <div className="w-full flex justify-center">
//             {data && data.reviews.length === 0 && (
//               <h5>No Reviews have for this product!</h5>
//             )}
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";
import { getProductStock } from "../../redux/actions/product";

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const formattedPrice = data && data.price ? data.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) : "";
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    if (count < data.stock) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = async (id, productId) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      try {
        const productStock = await getProductStock(productId);
        if (productStock < 1) {
          toast.error("Product stock limited!");
        } else {
          const cartData = { ...data, qty: count };
          dispatch(addTocart(cartData));
          toast.success("Item added to cart successfully!");
        }
      } catch (error) {
        console.error(" get product stock", error);
        toast.error(" get product stock");
      }
    }
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg =  totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);

  const handleMessageSubmit = async () => {
    if (isAuthenticated) {
      const groupTitle = data._id + user._id;
      const userId = user._id;
      const sellerId = data.shop._id;
      await axios
        .post(`${server}/conversation/create-new-conversation`, {
          groupTitle,
          userId,
          sellerId,
        })
        .then((res) => {
          navigate(`/inbox?${res.data.conversation._id}`);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } else {
      toast.error("Please login to create a conversation");
    }
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%] ml-12`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%] mr-2 ml-9">
                <img
                  src={`${data && data.images[select]?.url}`}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="w-full flex mt-4">
                  {data &&
                    data.images.map((i, index) => (
                      <div
                        key={index}
                        className={`${
                          select === 0 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={`${i?.url}`}
                          alt=""
                          className="h-20 w-20 object-cover mr-2"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                  <div
                    className={`${
                      select === 1 ? "border" : "null"
                    } cursor-pointer`}
                  ></div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5 ml-10 ">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <div className="flex items-center mt-3">
                  <Ratings rating={averageRating} />
                  <span className="ml-5 text-gray-500">
                    {averageRating}/5 ({totalReviewsLength} Ulasan)
                  </span>
                </div>
                <div>
                  
                </div>
                <h4 className={`${styles.productPrice} text-[25px]  mt-8`}> 
                  {formattedPrice}
                </h4>
                <h2 className="text-gray-600 mt-0,5">Berat: {data.size} gram</h2>

                
                


                <div className="flex items-center mt-4">
                  <div className="flex items-center mt-4 border-black rounded-l bf">
                    <button
                      className="flex items-center justify-center bg-white border border-black rounded-l px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >

                      <span className="text-gray-600 text-l">-</span>
                    </button>
                    <span className="bg-white border-t border-b border-black text-gray-800 font-medium px-4 py-2">
                      {count}
                    </span>
                    <button
                      className="flex items-center justify-center bg-white border border-black rounded-r px-4 py-2 focus:outline-none hover:bg-gray-200 transition duration-300 "
                      onClick={incrementCount}
                      disabled={count >= data.stock}
                    >
                      <span className="text-gray-600 text-l">+</span>
                    </button>

                  </div>
                  <p className="ml-4 mt-4 text-gray-800">Stok: {data.stock}</p>
                </div>
                 <div className="flex items-center mt-5">
                  <button
                    className={`${styles.button} bg-[#6443d1] text-white !rounded !h-15 w-50 flex items-center justify-center`}
                    onClick={() => addToCartHandler(data._id, data._id)}
                    disabled={data.stock === 0}
                  >
                    Tambah Keranjang
                  </button>
                  <div className="ml-4">
                    {click ? (
                      <AiFillHeart
                        className="text-3xl text-red-500 cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                      />
                    ) : (
                      <AiOutlineHeart
                        className="text-3xl text-red-500 cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                      />
                    )}
                  </div>
                  <div className="ml-4">
                    <AiOutlineMessage className="text-3xl mr-2"
                      onClick={handleMessageSubmit}
                    />

                    
                 </div>
                   
                    
                  
                </div>
                

              </div>
            </div>
          </div>
          <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
          />
        </div>
      ) : null}
    </div>
  );
};


const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
}) => {
  const [active, setActive] = useState(1);

  return (
    <div className="bg-[#fbf3e2] px-3 800px:px-10 py-2 rounded ml-40 mt-10">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[x]"
            }
            onClick={() => setActive(1)}
          >
            Deskripsi Produk
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[x]"
            }
            onClick={() => setActive(2)}
          >
            Ulasan Pembeli
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        {/* <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[x]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div> */}
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                {/* <img
                  src={`${backend_url}/${item.user.avatar}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                /> */}
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>Belum ada ulasan untuk produk ini!</h5>
            )}
          </div>
        </div>
      ) : null}

      {/* {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <Link to={`/shop/preview/${data.shop._id}`}>
              <div className="flex items-center">
                <img
                  src={`${backend_url}${data?.shop?.avatar}`}
                  className="w-[50px] h-[50px] rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({averageRating}/5) Ratings
                  </h5>
                </div>
              </div>
            </Link>
            <p className="pt-2">{data.shop.description}</p>
          </div>
          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500]">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500]">
                  {products && products.length}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews:{" "}
                <span className="font-[500]">{totalReviewsLength}</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductDetails;
