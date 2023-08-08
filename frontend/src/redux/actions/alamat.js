import axios from 'axios';
import { toast } from "react-toastify";
import { server } from "../../server";


// PROVINSI
export const getAllProvinces = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProvincesRequest",
    });

    const { data } = await axios.get(
      `${server}/alamat/provinces`
    );
    dispatch({
      type: "getAllProvincesSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllProvincesFailed",
      payload: error.response.data.message,
    });
  }
};


// KOTA
export const getAllCities = (provinceId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllCitiesRequest",
    });

    const { data } = await axios.get(
      `${server}/alamat/cities/${provinceId}`
    );
    dispatch({
      type: "getAllCities Success",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAllCitiesFailed",
      payload: error.response.data.message,
    });
  }
};

export const calculateShippingCost = (shippingData) => async (dispatch) => {
  try {
    dispatch({
      type: 'calculateShippingCostRequest',
    });

    const { data } = await axios.post(
      `${server}/alamat/shipping-cost`,
      shippingData
    );

    dispatch({
      type: 'calculateShippingCostSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'calculateShippingCostFailed',
      payload: error.response.data.error,
    });
  }
};



