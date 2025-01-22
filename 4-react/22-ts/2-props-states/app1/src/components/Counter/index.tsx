import { useState } from "react"

const Counter: React.FC = () => {
  // <ts type>はGenerics: nullを許可する場合は<number>を入れるべき
  const [count, setCount] = useState<number>(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
    </>
  )
}

export default Counter