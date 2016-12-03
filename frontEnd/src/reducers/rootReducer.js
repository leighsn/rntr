import { combineReducers } from 'redux'

function user(state={}, action) {
  switch(action.type) {
    case 'LOG_IN':
      return {userID: action.payload.user_id, userEmail: action.payload.user_email}
    default:
      return state;
  }
}

function apartment(state={crime:{},commute:""}, action) {
  switch(action.type) {
    case 'SHOW_APT':
      return{crime: action.payload.crime_data, commute: action.payload.distance_data}
    case 'GET_DISTANCE':
      return action.payload
<<<<<<< HEAD
    case 'GET_SCHOOLS':
      return action.payload
    case 'LOG_IN':
      console.log(action.payload)
=======
    case 'GET_CRIME':
>>>>>>> merger
      return action.payload
    default:
      return state;
  }
}
const rootReducer = combineReducers({user, apartment})
export default rootReducer
