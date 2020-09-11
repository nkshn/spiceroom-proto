import CartItem from '../../model/cartItem';

const initialState = {
  products: [],
  totalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      let arr = [...state.products];
      let price = action.payload.price;

      let item = new CartItem(
        action.payload.id,
        action.payload.title,
        action.payload.price,
        1,
        action.payload.price,
      );

      let isAllreadyInCart = arr.findIndex(item => item.id === action.payload.id);
      if (isAllreadyInCart < 0) {
        arr.push(item);
      } else {
        let index = state.products.findIndex(item => action.payload.id === item.id);
        arr[index].quantity++;
        arr[index].sum = arr[index].quantity * action.payload.price;
      }

      return {
        ...state,
        products: arr,
        totalPrice: state.totalPrice + price
      };
  }
  return state
}

export default cartReducer;