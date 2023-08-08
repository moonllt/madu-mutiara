// PROVINSI
const initialState = {
  provinces: [],
  loading: false,
  error: null,
};

const provinceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllProvincesRequest":
      return {
        ...state,
        loading: true,
      };
    case "getAllProvincesSuccess":
      return {
        ...state,
        provinces: action.payload,
        loading: false,
      };
    case "getAllProvincesFailed":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

// KOTA
const initialCityState = {
  cities: [],
  loading: false,
  error: null,
};

const cityReducer = (state = initialCityState, action) => {
  switch (action.type) {
    case "getAllCitiesRequest":
      return {
        ...state,
        loading: true,
      };
    case "getAllCitiesSuccess":
      return {
        ...state,
        cities: action.payload,
        loading: false,
      };
    case "getAllCitiesFailed":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const initialShippingCostState = {
  loading: false,
  error: null,
  shippingCost: null,
};

const calculateShippingCost = (state = initialShippingCostState, action) => {
  switch (action.type) {
    case 'calculateShippingCostRequest':
      return {
        ...state,
        loading: true,
        error: null,
        shippingCost: null,
      };
    case 'calculateShippingCostSuccess':
      return {
        ...state,
        loading: false,
        shippingCost: action.payload,
      };
    case 'calculateShippingCostFailed':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { provinceReducer, cityReducer, calculateShippingCost};
