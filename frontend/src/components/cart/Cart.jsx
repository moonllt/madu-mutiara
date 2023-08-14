import React, { useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { backend_url } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { FiX, FiPlus, FiMinus, FiXCircle } from "react-icons/fi";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };
  

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0000004b] z-10 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b">
          <h3 className="text-lg font-semibold">Cart</h3>
          <FiX
            size={20}
            className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
            onClick={() => setOpenCart(false)}
          />
        </div>
        <div className="px-4 py-2">
          {cart && cart.length === 0 ? (
            <div className="flex items-center justify-center h-40">
              <h5 className="text-center">Cart is empty!</h5>
            </div>
          ) : (
            <div>
              <div className="flex items-center px-4 py-2">
                <IoBagHandleOutline size={25} className="mr-2" />
                <h5 className="text-lg font-semibold">
                  {cart && cart.length} items
                </h5>
              </div>
              <div className="border-t">
                {cart &&
                  cart.map((item, index) => (
                    <CartSingle
                      key={index}
                      data={item}
                      quantityChangeHandler={quantityChangeHandler}
                      removeFromCartHandler={removeFromCartHandler}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="px-5 mb-3">
            {/* checkout button */}
            <Link to="/checkout">
              <button className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-600 transition-colors">
                Checkout ({totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" })})
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.price * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  const formattedPrice = data && data.price ? data.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) : "";

  return (
    <div className="border-b p-4">
      <div className="flex items-center">
        <FiXCircle
          className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
          onClick={() => removeFromCartHandler(data)}
        />
        <img
          src={`${data?.images[0]?.url}`}
          alt=""
          className="w-[130px] h-min rounded-[5px] ml-2 mr-2"
        />
        <div className="ml-4 flex flex-col">
          <h1 className="text-md font-semibold">{data.name}</h1>
          <h4 className="text-gray-500 mt-2">
            {formattedPrice} x {value}
          </h4>
        </div>
        <div className="ml-auto">
          <div className="flex items-center">
            <FiMinus
              size={20}
              className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => decrement(data)}
            />
            <span className="px-2">{value}</span>
            <FiPlus
              size={20}
              className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => increment(data)}
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default Cart;
