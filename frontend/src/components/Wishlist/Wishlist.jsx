import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { backend_url } from "../../server";
import { addTocart } from "../../redux/actions/cart";
import { FiShoppingCart, FiX } from 'react-icons/fi';



const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-10 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b">
          <h3 className="text-lg font-semibold">Wishlist</h3>
          <FiX
            size={20}
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        <div className="px-4 py-2">
          {wishlist && wishlist.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <h5 className="text-center">Tambahkan produk ke Wishlist Anda!</h5>
            </div>
          ) : (
            <div>
              <div className="flex items-center px-4 py-2">
                <AiOutlineHeart size={25} className="mr-2" />
                <h5 className="text-lg font-semibold">
                  {wishlist && wishlist.length} items
                </h5>
              </div>
              <div className="border-t">
                {wishlist &&
                  wishlist.map((item, index) => (
                    <CartSingle
                      key={index}
                      data={item}
                      removeFromWishlistHandler={removeFromWishlistHandler}
                      addToCartHandler={addToCartHandler}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="flex items-center">
        <FiX
          size={18}
          className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors mr-2"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={`${backend_url}${data?.images[0]}`}
          alt=""
          className="w-[130px] h-auto rounded-[5px]"
        />
        <div className="ml-4 flex flex-col">
          <h1 className="text-md font-semibold">{data.name}</h1>
          <h4 className="text-gray-500 mt-2">
            Rp {data.price.toLocaleString("en-ID")}
          </h4>
        </div>
        <div className="ml-auto ">
          <FiShoppingCart
            size={20}
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
            title="Add to cart"
            onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};


export default Wishlist;
