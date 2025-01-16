import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
    </>
  )
}

export default Counter