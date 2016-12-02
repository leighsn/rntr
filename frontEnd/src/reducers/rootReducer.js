function reducer(state={}, action) {
  switch(action.type) {
    case 'NEW_USER':
      return action.payload
    case 'GET_DISTANCE':
      return action.payload
    case 'GET_AMENITIES':
      return action.payload
    case 'LOG_IN':
      console.log(action.payload)
      state.token = action.payload.jwt
      return action.payload
    default:
      return state;
  }
}

module.exports = reducer
