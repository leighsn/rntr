var $ = require("jquery");

const signUp = function(email, password){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({user: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'NEW_USER', payload: data})
    })
  }
}




const getDistance = function(origin, destination){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/destinations',
      type: 'POST',
      data: JSON.stringify({auth: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'NEW_USER', payload: data})
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
      dispatch({type: 'LOG_IN', payload: data})
    })
  }
}

export {signUp, logIn, getDistance}
