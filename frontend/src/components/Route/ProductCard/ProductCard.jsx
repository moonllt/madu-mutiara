import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// import { backend_url } from "../../../server";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item sudah ada di keranjangmu!");
    } else {
      if (data.stock < 1) {
        toast.error("Produk terbatas!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Produk tersimpan di keranjang!");
      }
    }
  };

  return (
    <>
      <div className="w-full max-w-[400px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link
          to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}
        >
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full h-[180px] object-contain"
          />
        </Link>
        <Link
          to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}
        >
          <h4
            className="pb-3 font-[400] justify-center flex items-center"
            style={{ fontSize: '15px' }}
          >
            {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
          </h4>


          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center">
              {[...Array(1)].map((_, index) => (
                <AiFillStar key={index} size={18} color="#FF9529" />
              ))}
              <span className="ml-1"> {data?.ratings} </span>
            </div>

            <div> | </div>

            <span className="font-[400] text-[17px] text-[#cdc9bf]">
              {data?.sold_out} terjual
            </span>
          </div>

          <div className="py-2 flex items-center justify-center">
            <div className="flex">
              <h4 className={`${styles.price}`}>
                {data.price ? (
                  <h4 className="text-[#333] ">Rp {data.price.toLocaleString("en-ID")}</h4>
                ) : null}
              </h4>
            </div>
          </div>

        </Link>

        {/* side options */}
        <div className="flex justify-center mt-2">
          <div
            style={{
              backgroundColor: "#cdc9bf",
              padding: "3px",
              borderRadius: "4px",
              marginRight: "8px",
            }}
          >
            {click ? (
              <AiFillHeart
                size={22}
                className="cursor-pointer mr-1 ml-1"
                onClick={() => removeFromWishlistHandler(data)}
                color={click ? "red" : "#333"}
                title="Remove from wishlist"
              />
            ) : (
              <AiOutlineHeart
                size={22}
                className="cursor-pointer mr-1 ml-1"
                onClick={() => addToWishlistHandler(data)}
                color={click ? "red" : "#333"}
                title="Add to wishlist"
              />
            )}
          </div>
          <div
            style={{
              backgroundColor: "#cdc9bf",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            <AiOutlineShoppingCart
              size={25}
              className="cursor-pointer"
              onClick={() => addToCartHandler(data._id)}
              color="#444"
              title="Add to cart"
            />
          </div>

          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>


      </div>
    </>
  );
};

export default ProductCard;
