import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
)

