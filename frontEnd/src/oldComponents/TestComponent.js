import React from 'react'

export default () => {

  function handleClick(event){
    event.preventDefault()
    let token = localStorage.getItem('token')
    alert(token)

  }

  return (

    <div>
      <button onClick={handleClick}>Show Token</button>
    </div>
  )
}
