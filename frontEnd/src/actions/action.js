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
      if(!!data.error){
        alert(data.error)
      } else {
      dispatch({type: 'NEW_USER', payload: data})
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
      dispatch({type: 'LOG_IN', payload: data})
    }
    })
  }
}

export {signUp, logIn}
