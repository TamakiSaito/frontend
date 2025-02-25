'use client'

import React, { useContext } from 'react';

type User = {
  id: number
  name: string
}

// ユーザーデータを保持するContextを作成
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)
  return user !== null ? <p>Hello, {user.name}</p> : null
}
const Child = () => {
  const now = new Date()
  return (
    <div>
      <p>Current: {now. toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}
const Parent = () => {
  const user: User = {
    id: 1,
    name: 'Mark',
  }
  return (
  // Contextに値を渡す
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default Parent;