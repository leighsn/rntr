import $ from 'jquery'
import { browserHistory } from 'react-router'

const signUp = function(email, password){
  //dispatch({type: CREATING_USER})
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
      //headers: {authorization: localStorage.getItem('jwt')}

    }).done(function(data){
      if(!!data.error){
        alert(data.error)
      } else {
         //sets url
        localStorage.setItem('token', data.jwt)
        dispatch({type: 'SIGN_UP', payload: data})
        browserHistory.push('preferences')
      }
    })
  }
}

const aptSearch = function(address, userID){

  // let urlAddress = Object.keys(address).map((key) => {return address[key]}).join('&') + `&${userID}`
  browserHistory.push('loading')

  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/apts`,
      type: 'POST',
      data: JSON.stringify({address: address, user_id: userID}),
      contentType: "application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'SHOW_SEARCH', payload: data})
      browserHistory.push('results')
    }).fail(function(){
      alert('Apartment not found - please try again later')
      browserHistory.push('search')
    })
  }
}

const logIn = function(email, password){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/sessions',
      type: 'POST',
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      if(!!data.error){
      alert(data.error)
    } else {
      localStorage.setItem('token', data.jwt)
      dispatch({type: 'LOG_IN', payload: data})
      browserHistory.push('search')
    }
    })
  }
}

const logOut = function (event){
  event.preventDefault()
  localStorage.removeItem('token')
  browserHistory.push('log-in')
  return {type: 'LOG_OUT', payload: null}
}

const savePreferences = function(userState, prefState){
  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/users/${userState.userID}`,
      type: 'PATCH',
      data: JSON.stringify({prefState: prefState, token: localStorage.token}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'UPDATE_PREFERENCES', payload: data})
      browserHistory.push('search')
    })
  }
}

const showApartment = function(id){
  return function(dispatch){
    $.ajax({
      url:`http://localhost:3000/apts/${id}`,
      type: 'GET',
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'SHOW_APT', payload: data})
      browserHistory.push('results')
    })
  }
}

const deleteSearch = function(id){

  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/apts/${id}`,
      type: 'DELETE',
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'DELETE_SEARCH', payload: data})
    })
  }
}


export { signUp, logIn, aptSearch, savePreferences, showApartment, logOut, deleteSearch }
