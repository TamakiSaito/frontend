import { useState, useEffect } from "react";

function sayHello() {
  const [data, setData] = useState({name: ''})
  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setData(profile)
    })
  },[])

  return <div>hello {data.name}</div>
}

export default sayHello