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
        dispatch({type: 'LOG_IN', payload: data})
        browserHistory.push('preferences')
      }
    })
  }
}

const aptSearch = function(address, userID){

  let urlAddress = Object.keys(address).map((key) => {return address[key]}).join('&') + `&${userID}`
  browserHistory.push('loading')

  return function(dispatch){
    $.ajax({
      url: `http://localhost:3000/apts/${urlAddress}`,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'SHOW_APT', payload: data})
      browserHistory.push('results')
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
  {type: 'LOG_OUT'}
  browserHistory.push('log-in')

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
    })
  }
}

const showSearches = function(userID){

}


export { signUp, logIn, aptSearch, savePreferences, showSearches, logOut }
