'use client'

import React, { memo, useState, useCallback } from 'react';

// type FizzProps = {
//   isFizz: boolean
// }

// const Fizz = (props: FizzProps) => {
//   const  { isFizz } = props
//   console.log(`Fizzが再描画されました, isFizz=${isFizz}`)
//   return <span>{isFizz ? 'Fizz' : ''}</span>
// }

// type BuzzProps = {
//   isBuzz: boolean
// }

// const Buzz = memo<BuzzProps>((props) => {
//   const { isBuzz } = props
//   console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`)
//   return (
//     <span>
//       {isBuzz ? 'Buzz' : ''}
//     </span>
//   )
// })

// export const Parent = () => {
//   const [count, setCount] = useState(1)
//   const isFizz = count % 3=== 0
//   const isBuzz = count % 5=== 0

//   console.log(`Parentが再描画されました, count=${count}`)
//   return (
//     <div>
//       <button onClick={() => setCount((c) => c+1)}>カウントを+1する</button>
//       <p>{`現在のカウント: ${count}`}</p>
//       <p>
//         <Fizz isFizz={isFizz} />
//         <Buzz isBuzz={isBuzz}/>
//       </p>
//     </div>
//   )
// }

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const  { onClick } = props
  console.log('DecrementButtonが再描画されました')
  return  <button onClick={onClick}>Decrement</button>
}
const IncrementButton = (props: ButtonProps) => {
  const  { onClick } = props
  console.log('IncrementButtonが再描画されました')
  return  <button onClick={onClick}>Increment</button>
}
const DoubleButton = React.memo((props: ButtonProps) => {
  const  { onClick } = props
  console.log('DoubleButtonが再描画されました')
  return  <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const  [count, setCount] = useState(0)
  
  const decrement = () => {
    setCount((c) => c - 1)
  }
  const increment = () => {
    setCount((c) => c + 1)
  }
  // useCallbackを使って関数をメモ化する
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}

export default Parent