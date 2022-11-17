import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [data, setData] = useState();

  useEffect(()=> {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message));
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
