import { combineReducers } from 'redux'

function user(state={}, action) {
  switch(action.type) {
    case 'LOG_IN':
      return {userID: action.payload.user_id, userEmail: action.payload.user_email}
    case 'UPDATE_PREFERENCES':
    console.log(action.payload)
      return {userID: action.payload.user_id, destination: action.payload.destination, commute: action.payload.commute, schools: action.payload.schools, safety: action.payload.safety, amenities: action.payload.amenities}
    default:
      return state;
  }
}

function apartment(state={}, action) {
  switch(action.type) {
    case 'SHOW_APT':
      return action.payload
    case 'GET_DISTANCE':
      return action.payload
    case 'GET_SCHOOLS':
      return action.payload
    case 'GET_AMENITIES':
      return action.payload
    
    case 'GET_CRIME':
      return action.payload
    default:
      return state;
  }
}
const rootReducer = combineReducers({user, apartment})
export default rootReducer
