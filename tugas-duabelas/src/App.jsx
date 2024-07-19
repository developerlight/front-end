
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
