import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../../server";

// export const createProduct = (newForm) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "productCreateRequest",
//     });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await axios.post(
//       `${server}/product/create-product`,
//       newForm,
//       config
//     );

//     dispatch({
//       type: "productCreateSuccess",
//       payload: data.product,
//     });

//     toast.success("Product successfully created!");
//     // Redirect to dashboard or do any necessary actions
//   } catch (error) {
//     dispatch({
//       type: "productCreateFail",
//       payload: error.response.data.message,
//     });
//     toast.error(error.response.data.message);
//   }
// };

// create product
export const createProduct =
  (
    name,
    description,
    category,
    tags,
    originalPrice,
    discountPrice,
    stock,
    shopId,
    images
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "productCreateRequest",
      });

      const { data } = await axios.post(
        `${server}/product/create-product`,
        name,
        description,
        category,
        tags,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        images,
      );
      dispatch({
        type: "productCreateSuccess",
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: "productCreateFail",
        payload: error.response.data.message,
      });
    }
  };

// // create product
// export const createProduct =
//   (
//     name,
//     description,
//     category,
//     tags,
//     price,
//     size,
//     stock,
//     images,
//     shopId,
//     shop
    
//   ) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: "productCreateRequest",
//       });

//       const { data } = await axios.post(
//         `${server}/product/create-product`,
//         name,
//     description,
//     category,
//     tags,
//     price,
//     size,
//     stock,
//     images,
//         shopId,
//     shop
//       );
//       dispatch({
//         type: "productCreateSuccess",
//         payload: data.product,
//       });
//     } catch (error) {
//       dispatch({
//         type: "productCreateFail",
//         payload: error.response.data.message,
//       });
//     }
//   };

// Update a product
export const updateProduct = (id, updatedProduct) => async (dispatch) => {
  try {
    dispatch({ type: "updateProductRequest" });

    const { data } = await axios.put(`${server}/product/update-product/${id}`, updatedProduct);

    dispatch({
      type: "updateProductSuccess",
      payload: data.product,
    });

    return data.product;
  } catch (error) {
    dispatch({
      type: "updateProductFailed",
      payload: error.response.data.message,
    });

    throw error;
  }
};



// //edit produk
// export const updateProduct = (id, updatedForm) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "updateProductRequest",
//     });

//     const config = { headers: { "Content-Type": "multipart/form-data" } };

//     const { data } = await axios.put(
//       `${server}/product/update-product/${id}`,
//       updatedForm,
//       config
//     );

//     dispatch({
//       type: "updateProductSuccess",
//       payload: data.product,
//     });
//   } catch (error) {
//     dispatch({
//       type: "updateProductFail",
//       payload: error.response.data.message,
//     });
//   }
// };


// Fetch a single product
export const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "fetchProductRequest" });

    const { data } = await axios.get(`${server}/product/${id}`);

    dispatch({
      type: "fetchProductSuccess",
      payload: data.product,
    });

    return data.product;
  } catch (error) {
    dispatch({
      type: "fetchProductFailed",
      payload: error.response.data.message,
    });

    throw error;
  }
};


// // get All Products of a shop
// export const getAllProductsShop = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllProductsShopRequest",
//     });

//     const { data } = await axios.get(
//       `${server}/product/get-all-products-shop/${id}`
//     );

//     const updatedProducts = data.products.map((product) => {
//       const updatedOptions = product.options.map((option) => ({
//         ...option,
//         selectedWeight: option.weight, // Default selected weight
//         selectedPrice: option.price, // Default selected price
//       }));

//       return {
//         ...product,
//         options: updatedOptions,
//       };
//     });

//     dispatch({
//       type: "getAllProductsShopSuccess",
//       payload: updatedProducts,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllProductsShopFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// get Product Stock by ID
export const getProductStock = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductStockRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-product-stock/${productId}`
    );
    dispatch({
      type: "getProductStockSuccess",
      payload: data.stock,
    });
  } catch (error) {
    dispatch({
      type: "getProductStockFailed",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response.data.message,
    });
  }
};


// // delete product of a shop
// export const deleteProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteProductRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/product/delete-shop-product/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: "deleteProductSuccess",
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteProductFailed",
//       payload: error.response.data.message,
//     });
//   }
// };

// get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "getAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};
