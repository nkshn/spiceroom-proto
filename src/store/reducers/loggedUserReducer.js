const initialState = {
  isLogged: false
}

const loggedUserReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'CHANGE_USER':
      return state;
    default:
      return !state.isLogged;
  }
}

export default loggedUserReducer;