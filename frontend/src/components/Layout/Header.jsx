import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import logoMadu from "../../assets/images/logo-Madu.jpg";


const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchContainer, setShowSearchContainer] = useState(false);

  

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };


  const handleSearchIconClick = () => {
  setShowSearchContainer(!showSearchContainer);
};


  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#ffffff] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />

            {/* categories */}
            <div onClick={() => setDropDown(!dropDown)} className="mt-2 mb-2 z-10">
              <div className="relative">
                <button
                  className={`h-[40px] w-[120px] flex justify-between items-center pl-2 bg-transparent text-[#CF9443] hover:bg-gray-200 font-sans text-md font-[500] select-none rounded-t-md ${dropDown ? "border-b-2 border-black-500" : ""}`}
                >
                  Kategori
                  <IoIosArrowDown
                    size={20}
                    className={`ml-1 transition-transform ${dropDown ? "rotate-180" : ""}`}
                  />
                </button>
                {dropDown && (
                  <div className="absolute left-0 w-[120px] mt-2 bg-white shadow-md rounded-b-md overflow-y-auto max-h-[300px]">
                    <ul className="py-2">
                      {categoriesData.map((category) => (
                        <li key={category.id} className="px-1 py-2 hover:bg-gray-100">
                          <a href={`/products?category=${category.title}`} className="text-gray-800 ">
                            {category.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
            </div>
    
          </div>

          <div>
            <Link to="/">
              <img
                src={logoMadu}
                alt=""
                style={{width: "80px", height: "auto", marginRight: '130px',}}
              />
              </Link>
          </div>

          {/* <div style={{ fontFamily: 'Comfortaa', fontWeight: 'bold', fontSize: '25px', color: '#000000', textAlign: 'left', marginRight: '130px',   }}>
  Madu Mutiara
</div> */}


  
          
          {/* WISHLIST */}
          <div className="flex">
            {/* Search Icon */}
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]"
                onClick={handleSearchIconClick}
              >
                <AiOutlineSearch size={30} color="#CF9443" />
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="#CF9443" />
                <span className="absolute right-0 top-0 rounded-full bg-[#CF9443] w-4 h-4 top right p-0 m-0 text-black font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>
            
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart size={30} color="#CF9443" />
                <span className="absolute right-0 top-0 rounded-full bg-[#CF9443] w-4 h-4 top right p-0 m-0 text-black font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>
            
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <CgProfile
                      size={30}
                      color="#CF9443"
                      title="Profile"
                    />
                  </Link>
                ) : (
                    <Link to="/login">
                      <CgProfile size={30} color="#CF9443" />
                  </Link>
                )}
              </div>
            </div>
            
            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
            {/* wishlist popup */}
            {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[70px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src={logoMadu}
                alt=""
                style={{width: "70px", height: "auto" }}
              />
              </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#000000] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#171817] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#070707] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              
              <br />
            

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <CgProfile
                      size={30}
                      color="black"
                      title="Profile" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Kontainer Pencarian Tambahan */}
{showSearchContainer && (
  <div className="bg-white px-4 py-2">
    <form>
      <input
        type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={handleSearchChange}
        className="border border-gray-300 rounded-md py-1 px-2"
        style={{
          borderWidth: '1px',
          borderColor: '#d1d5db',
          borderRadius: '0.375rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
        }}
      />
      <button
        type="submit"
        className="bg-gray-800 text-white rounded-md py-1 px-2 ml-2"
        style={{
          backgroundColor: '#1f2937',
          color: '#ffffff',
          borderRadius: '0.375rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.25rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          marginLeft: '0.5rem',
        }}
      >
        Cari
      </button>
          </form>
          {searchData && searchData.length !== 0 && (
        <div className="absolute mt-2 w-full max-h-[30vh] overflow-y-auto bg-white shadow-sm z-10 rounded-md">
          {searchData.map((i, index) => (
            <Link key={i._id} to={`/product/${i._id}`}>
              <div className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100">
                <img
                  src={`${backend_url}${i.images[0]}`}
                  alt=""
                  className="w-12 h-12 mr-3 object-cover rounded-md"
                />
                <h1 className="text-base font-medium">{i.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
  </div>
)}

    </>
  );
};

export default Header;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "../../styles/styles";
// import { categoriesData, } from "../../static/data";
// import {
//   AiOutlineHeart,
//   AiOutlineSearch,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";
// import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
// import { BiMenuAltLeft } from "react-icons/bi";
// import { CgProfile } from "react-icons/cg";
// import DropDown from "./DropDown";
// import Navbar from "./Navbar";
// import { useSelector } from "react-redux";
// import { backend_url } from "../../server";
// import Cart from "../cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";
// import { RxCross1 } from "react-icons/rx";
// import logoMadu from "../../assets/images/logo-Madu.jpg";


// const Header = ({ activeHeading }) => {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { isSeller } = useSelector((state) => state.seller);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const { cart } = useSelector((state) => state.cart);
//   const { allProducts } = useSelector((state) => state.products);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchData, setSearchData] = useState(null);
//   const [active, setActive] = useState(false);
//   const [dropDown, setDropDown] = useState(false);
//   const [openCart, setOpenCart] = useState(false);
//   const [openWishlist, setOpenWishlist] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleSearchChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredProducts =
//       allProducts &&
//       allProducts.filter((product) =>
//         product.name.toLowerCase().includes(term.toLowerCase())
//       );
//     setSearchData(filteredProducts);
//   };

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 70) {
//       setActive(true);
//     } else {
//       setActive(false);
//     }
//   });

//   return (
//     <>
//       <div className={`${styles.section}`}>
//         <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
//           <div>
//             <Link to="/">
//               <img
//                 src={logoMadu}
//                 alt=""
//                 style={{width: "90px", height: "auto" }}
//               />
//             </Link>
//           </div>
//           {/* search box */}
//           <div className="w-[50%] relative">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search Product..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="h-[40px] w-full px-2 border-[#000000] border-[2px] rounded-md"
//               />
//               <AiOutlineSearch
//                 size={30}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
//               />
//             </div>
//             {searchData && searchData.length !== 0 && (
//               <div className="absolute mt-2 w-full max-h-[30vh] overflow-y-auto bg-white shadow-sm z-10 rounded-md">
//                 {searchData.map((i, index) => (
//                   <Link key={i._id} to={`/product/${i._id}`}>
//                     <div className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-100">
//                       <img
//                         src={`${backend_url}${i.images[0]}`}
//                         alt=""
//                         className="w-12 h-12 mr-3 object-cover rounded-md"
//                       />
//                       <h1 className="text-base font-medium">{i.name}</h1>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* <div className={`${styles.button}`}>
//             <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
//               <h1 className="text-[#fff] flex items-center">
//                 {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
//                 <IoIosArrowForward className="ml-1" />
//               </h1>
//             </Link>
//           </div> */}
//         </div>
//       </div>
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         } transition hidden 800px:flex items-center justify-between w-full bg-[#f7d67b] h-[70px]`}
//       >
//         <div
//           className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
//         >
//            {/* search box
//           <div className="w-[15%] relative">
//             <input
//               type="text"
//               placeholder="Cari produk..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="h-[30px] w-full px-2  border-[#cccccf] border-[2px] rounded-md"
//               style={{ backgroundColor: "#cccccf" }}
//             />
//             <AiOutlineSearch
//               size={20}
//               className="absolute right-2 top-1.5 cursor-pointer"
//             />
//             {searchData && searchData.length !== 0 ? (
//               <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
//                 {searchData &&
//                   searchData.map((i, index) => {
//                     return (
//                       <Link to={`/product/${i._id}`}>
//                         <div className="w-full flex items-start-py-3">
//                           <img
//                             src={`${backend_url}${i.images[0]}`}
//                             alt=""
//                             className="w-[40px] h-[40px] mr-[10px]"
//                           />
//                           <h1>{i.name}</h1>
//                         </div>
//                       </Link>
//                     );
//                   })}
//               </div>
//             ) : null}
//           </div> */}

          
//           {/* navitems */}
//           <div className={`${styles.noramlFlex}`}>

//             {/* categories */}
//             <div onClick={() => setDropDown(!dropDown)} className="mt-2 z-10">
//               <div className="relative">
//                 <button
//                   className={`h-[40px] w-[120px] flex justify-between items-center pl-2 bg-transparent text-white hover:bg-gray-800 font-sans text-lg font-[500] select-none rounded-t-md ${dropDown ? "border-b-2 border-blue-500" : ""}`}
//                 >
//                   Kategori
//                   <IoIosArrowDown
//                     size={20}
//                     className={`ml-2 transition-transform ${dropDown ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {dropDown && (
//                   <div className="absolute left-0 w-[120px] mt-2 bg-white shadow-md rounded-b-md overflow-y-auto max-h-[300px]">
//                     <ul className="py-2">
//                       {categoriesData.map((category) => (
//                       <li key={category.id} className="px-1 py-2 hover:bg-gray-100">
//               <a href={`/products?category=${category.title}`} className="text-gray-800 ">
//                 {category.title}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )}
//   </div>
// </div>

//             <Navbar active={activeHeading} />
//           </div>

// {/* WISHLIST */}
//           <div className="flex">
//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenWishlist(true)}
//               >
//                 <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#ffffff] w-4 h-4 top right p-0 m-0 text-black font-mono text-[12px] leading-tight text-center">
//                   {wishlist && wishlist.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenCart(true)}
//               >
//                 <AiOutlineShoppingCart
//                   size={30}
//                   color="rgb(255 255 255 / 83%)"
//                 />
//                 <span className="absolute right-0 top-0 rounded-full bg-[#ffffff] w-4 h-4 top right p-0 m-0 text-black font-mono text-[12px] leading-tight text-center">
//                   {cart && cart.length}
//                 </span>
//               </div>
//             </div>

//             <div className={`${styles.noramlFlex}`}>
//               <div className="relative cursor-pointer mr-[15px]">
//                 {isAuthenticated ? (
//                   <Link to="/profile">
//                     <CgProfile
//                       size={30}
//                       color="rgb(255 255 255 / 83%)"
//                       title="Profile" />
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
//                   </Link>
//                 )}
//               </div>
//             </div>

//             {/* cart popup */}
//             {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//             {/* wishlist popup */}
//             {openWishlist ? (
//               <Wishlist setOpenWishlist={setOpenWishlist} />
//             ) : null}
//           </div>
//         </div>
//       </div>

//       {/* mobile header */}
//       <div
//         className={`${
//           active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
//         }
//       w-full h-[70px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
//       >
//         <div className="w-full flex items-center justify-between">
//           <div>
//             <BiMenuAltLeft
//               size={40}
//               className="ml-4"
//               onClick={() => setOpen(true)}
//             />
//           </div>
//           <div>
//             <Link to="/">
//               <img
//                 src={logoMadu}
//                 alt=""
//                 style={{width: "70px", height: "auto" }}
//               />
//               </Link>
//           </div>
//           <div>
//             <div
//               className="relative mr-[20px]"
//               onClick={() => setOpenCart(true)}
//             >
//               <AiOutlineShoppingCart size={30} />
//               <span class="absolute right-0 top-0 rounded-full bg-[#000000] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
//                 {cart && cart.length}
//               </span>
//             </div>
//           </div>
//           {/* cart popup */}
//           {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//           {/* wishlist popup */}
//           {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
//         </div>

//         {/* header sidebar */}
//         {open && (
//           <div
//             className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
//           >
//             <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
//               <div className="w-full justify-between flex pr-3">
//                 <div>
//                   <div
//                     className="relative mr-[15px]"
//                     onClick={() => setOpenWishlist(true) || setOpen(false)}
//                   >
//                     <AiOutlineHeart size={30} className="mt-5 ml-3" />
//                     <span class="absolute right-0 top-0 rounded-full bg-[#171817] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
//                       {wishlist && wishlist.length}
//                     </span>
//                   </div>
//                 </div>
//                 <RxCross1
//                   size={30}
//                   className="ml-4 mt-5"
//                   onClick={() => setOpen(false)}
//                 />
//               </div>

//               <div className="my-8 w-[92%] m-auto h-[40px relative]">
//                 <input
//                   type="search"
//                   placeholder="Search Product..."
//                   className="h-[40px] w-full px-2 border-[#070707] border-[2px] rounded-md"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                 />
//                 {searchData && (
//                   <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
//                     {searchData.map((i) => {
//                       const d = i.name;

//                       const Product_name = d.replace(/\s+/g, "-");
//                       return (
//                         <Link to={`/product/${Product_name}`}>
//                           <div className="flex items-center">
//                             <img
//                               src={i.image_Url[0].url}
//                               alt=""
//                               className="w-[50px] mr-2"
//                             />
//                             <h5>{i.name}</h5>
//                           </div>
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               <Navbar active={activeHeading} />
//               {/* <div className={`${styles.button} ml-4 !rounded-[4px]`}>
//                 <Link to="/shop-create">
//                   <h1 className="text-[#fff] flex items-center">
//                     Become Seller <IoIosArrowForward className="ml-1" />
//                   </h1>
//                 </Link>
//               </div> */}
//               <br />
            

//               <div className="flex w-full justify-center">
//                 {isAuthenticated ? (
//                   <div>
//                     <Link to="/profile">
//                       <CgProfile
//                       size={30}
//                       color="black"
//                       title="Profile" />
//                     </Link>
//                   </div>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="text-[18px] pr-[10px] text-[#000000b7]"
//                     >
//                       Login /
//                     </Link>
//                     <Link
//                       to="/sign-up"
//                       className="text-[18px] text-[#000000b7]"
//                     >
//                       Sign up
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;
