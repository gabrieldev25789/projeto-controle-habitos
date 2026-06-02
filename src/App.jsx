import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'
import Habitos from './Components/Habitos/Habitos';


function App() {
const [diaEscolhido, setDiaEscolhido] = useState([])

function handleDiaEscolhido(escolha) {
  setDiaEscolhido(prev => [...prev, escolha])
}

  const [user, setUser] = useState(() => {
  const emailAtivo = localStorage.getItem("sessao")
  if (!emailAtivo) return {}
    const saved = localStorage.getItem(`user-${emailAtivo}`)
    return saved ? JSON.parse(saved) : {}
  })

  const [dadosUser, setDadosUser] = useState(() => {
    const emailAtivo = localStorage.getItem("sessao")
    if (!emailAtivo) return {}
    const dados = localStorage.getItem(`dadosUser-${emailAtivo}`)
    return dados ? JSON.parse(dados) : {}
  })

  function handleSetUser(novoUser) {
    localStorage.setItem("sessao", novoUser.email) // salva sessão ativa
    setUser(novoUser)
    const dados = localStorage.getItem(`dadosUser-${novoUser.email}`)
    setDadosUser(dados ? JSON.parse(dados) : {})
  }

  return (
    <Routes>
      <Route path="/" element={<Form setUser={handleSetUser} />} />
      <Route path="/cadastro" element={<Home usuarioSalvo={user} dadosUser={dadosUser} setDadosUser={setDadosUser} onDiaEscolhido={handleDiaEscolhido}/>}/>
      <Route path="/habitos" element={<Habitos dadosUser={dadosUser} diaEscolhido={diaEscolhido}/>} />
    </Routes>
  )
}

export default App
