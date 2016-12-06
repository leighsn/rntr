import { combineReducers } from 'redux'

function user(state={}, action) {
  switch(action.type) {
    case 'LOG_IN':
      return {userID: action.payload.user_id, userEmail: action.payload.user_email, destination: action.payload.destination, commute: action.payload.commute, schools: action.payload.schools, safety: action.payload.safety, amenities: action.payload.amenities, category_1: action.payload.category_1, category_2: action.payload.category_2, category_3: action.payload.category_3}
    case 'UPDATE_PREFERENCES':
    console.log(action.payload)
      return Object.assign({}, state,{userID: action.payload.user_id, destination: action.payload.destination, commute: action.payload.commute, schools: action.payload.schools, safety: action.payload.safety, amenities: action.payload.amenities})
    default:
      return state;
  }
}

function apartment(state={}, action) {
  switch(action.type) {
    case 'SHOW_APT':
      return action.payload
    default:
      return state;
  }
}
const rootReducer = combineReducers({user, apartment})
export default rootReducer
