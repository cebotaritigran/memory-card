import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  if (count === 0) {
    setCount(1);
  }


  return (
    <>
      <div>
        {count}
      </div>

    </>
  )
}

export default App
