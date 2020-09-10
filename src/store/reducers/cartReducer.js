// import { addProductToCart } from '../actions/actions';

/*const initialState = {
  products: [],
  totalPrice: 0
}*/

const cartReducer = (state = 0, actions) => {
  switch (actions.type) {
    case 'INCREMENT':
      // return state.totalPrice + 200;
      // return state + 200;
      return state + actions.payload[1]; // 10
    case 'DECREMENT':
      // return state.totalPrice - 200;
      return state - 200;
    default:
      // return state.totalPrice + 1;
      return state + 1;
  }
}

export default cartReducer;