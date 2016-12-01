var $ = require("jquery");
import { browserHistory } from 'react-router'

const signUp = function(email, password){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      if(!!data.error){
        alert(data.error)
      } else {
      browserHistory.push('/show-test')
      localStorage.setItem('token', data.jwt)
      dispatch({type: 'LOG_IN', payload: data})
    }
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
      browserHistory.push('/show-test')
      localStorage.setItem('token', data.jwt)
      dispatch({type: 'LOG_IN', payload: data})
    }
    })
  }
}

export {signUp, logIn}
