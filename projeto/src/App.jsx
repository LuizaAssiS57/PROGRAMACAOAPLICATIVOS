import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mensagem from './components/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem-vindo ao meu projeto</h1>

      <Mensagem/>
    </>
  )
}

export default App
