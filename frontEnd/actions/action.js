var $ = require("jquery");

const signUp = function(email, password){
  return function(dispatch){
    $.ajax({
      url: 'https://localhost:3000/users',
      type: 'POST',
      data: JSON.stringify({auth: {email: email, password: password}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'NEW_USER', payload: data})
    })
  }
}

module.exports = signUp
