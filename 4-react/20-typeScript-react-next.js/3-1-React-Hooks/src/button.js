import React, { useState } from 'react'

// コールバック関数

function Button() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setTimeout(() => {
      setMessage('Say Hello')
    }, 2000)
  }

  return(
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  )
}

export default Button;