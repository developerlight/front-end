import { createContext, useState } from 'react'
import './App.css'
import Hook1 from './pages/Hook1'
import Hook2 from './pages/Hook2'

export const MyContext = createContext()

function App() {
  const [nama, setNama] = useState(0)

  return (
    <>
      {/* <Hook1 /> */}
      {/* <Hook2 /> */}
      <MyContext.Provider value={[nama, setNama]}>
        <Hook2 />
      </MyContext.Provider>
    </>
  )
}

export default App
