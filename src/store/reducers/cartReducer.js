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

    case 'INCREASE_PRODUCT_CART_QUANTITY':
      let array = [...state.products];
      let indexIncrease = state.products.findIndex(item => action.payload[0] === item.id);

      array[indexIncrease].quantity++;
      array[indexIncrease].sum = array[indexIncrease].quantity * action.payload[1];

      return {
        ...state,
        products: array,
        totalPrice: state.totalPrice + action.payload[1]
      };

    case 'DECREASE_PRODUCT_CART_QUANTITY':
      let arrayD = [...state.products];
      let indexDecrease = state.products.findIndex(item => action.payload[0] === item.id);

      if (arrayD[indexDecrease].quantity <= 1) {
        arrayD.splice(indexDecrease, 1); // Deleting Item from cart when Quantity of Item is 0
      } else {
        arrayD[indexDecrease].quantity--;
        arrayD[indexDecrease].sum = arrayD[indexDecrease].quantity * action.payload[1];
      }

      return {
        ...state,
        products: arrayD,
        totalPrice: state.totalPrice - action.payload[1]
      };

    case 'DELETE_PRODUCT_FROM_CART':
      let arrDelete = [...state.products];
      let findNeededIndex = state.products.findIndex(item => action.payload[0] === item.id)

      arrDelete.splice(findNeededIndex, 1);

      return {
        ...state,
        products: arrDelete,
        totalPrice: state.totalPrice - action.payload[1]
      };

    case 'CLEAR_CART':
      return state = initialState
  }
  return state;
}

export default cartReducer;