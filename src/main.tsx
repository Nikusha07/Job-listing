import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Basic from './App.tsx'
import MyForm from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>,
)
