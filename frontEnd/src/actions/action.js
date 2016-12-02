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
      url: 'http://localhost:3000/distances',
      type: 'POST',
      data: JSON.stringify({route: {origin: origin, destination: destination}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      dispatch({type: 'GET_DISTANCE', payload: data})
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

const getSchools = function(zipcode, grade){
  return function(dispatch){
    $.ajax({
      url: 'http://localhost:3000/schools',
      type: 'POST',
      data: JSON.stringify({school: {zipcode: zipcode, grade: grade}}),
      contentType:"application/json; charset=utf-8",
      dataType:"json"
    }).done(function(data){
      console.log(data)
      dispatch({type: 'GET_SCHOOLS', payload: data})
    })
  }
}

export {signUp, logIn, getDistance, getSchools}
