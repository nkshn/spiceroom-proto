import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loggedUserReducer from './loggedUserReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  isLogged: loggedUserReducer
})

export default rootReducer;