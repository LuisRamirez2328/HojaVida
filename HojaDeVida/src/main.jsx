import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/atoms/molecula/Header'
import Datos from './components/atoms/molecula/Datos'
import Lenguaje from './components/atoms/molecula/Lenguajes'
import Trabajo from './components/atoms/molecula/Trabajo'
import Publico from './components/atoms/molecula/Publico'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Datos/>
   <Lenguaje/>
   <Trabajo/>
   <Publico/>
  </React.StrictMode>,
)
