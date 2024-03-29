/* eslint-disable import/no-anonymous-default-export */
import { cartConstants } from "../../../app-clone/src/actions/constants";

const initState = {
    cartItems: {
    // 123: {
    //     _id: 123,
    //     name: 'Samsung mobile',
    //     img: 'some.jpg',
    //     price: 200,
    //     qty: 1,
    // }
  },
//   updatingCart: false,
//   error: null,
};

export default (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
    /*         case cartConstants.ADD_TO_CART_REQUEST:
            state = {
                ...state,
                updatingCart: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state = {
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartConstants.ADD_TO_CART_FAILURE:
            state = {
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartConstants.RESET_CART:
            state = {
                ...initState
            } */
  }
  return state;
};
