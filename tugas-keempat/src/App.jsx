import { Route, Routes } from 'react-router-dom'
import './index.css'
import Daschboard from './pages/dashboard'
import Inbox from './pages/inbox'
import Product from './pages/product'
import User from './pages/user'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Daschboard />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/product' element={<Product />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </>
  )
}

export default App
