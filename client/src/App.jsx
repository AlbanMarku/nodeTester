import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [data, setData] = useState();

  useEffect(()=> {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message));
    fetch('/add-user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: "test", age: 22})
    })
    .then(res=> console.log(res))
    console.log("done fetching");
  },[])

  return (
    <div className="App">
      <p>hello world!</p>
      <p>{data}</p>
      <p></p>
    </div>
  )
}

export default App
