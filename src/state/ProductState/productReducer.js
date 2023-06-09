import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishlist:[],
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
      case actionTypes.TOGGLE:
        return {
          ...state,
          term: !state.term,
        };
      case actionTypes.ADD_TO_WISHLIST:
      return{
        ...state,
        loading:false,
        wishlist:[...state.wishlist,action.payload],
        error:false,
      }
      case actionTypes.QUANTITY_UP:
        return {
          ...state,
          quantity: state.quantity+1,
        };
      case actionTypes.QUANTITY_DOWN:
        return {
          ...state,
          quantity: state.quantity-1,
        };
    default:
      return state;
  }
};
