import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'

function App() {
    const [user, setUser] = useState(() => {
      const saved = localStorage.getItem("user")
      return saved ? JSON.parse(saved) : {}
    })

  return (
    <Routes>
      <Route path="/" element={<Form usuarioSalvo={user} setUser={setUser} />} />
      <Route path="/cadastro" element={<Home usuarioSalvo={user} />} />
    </Routes>
  )
}

export default App
