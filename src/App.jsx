import "./App.css"
import { Routes, Route } from "react-router-dom"
import  Form  from "./Components/Form/Form.jsx"
import Home from "./Components/Home/Home.jsx"
import { useState } from "react"
import Habitos from "./Components/Habitos/Habitos.jsx"
import Progresso from "./Components/Progresso/Progresso.jsx"
import Perfil from "./Components/Perfil/Perfil.jsx"


function App() {

  const [dadoUser, setDadoUser] = useState(()=>{
  const emailAtivo = localStorage.getItem("sessao")
    if(!emailAtivo) return null 
    return JSON.parse(localStorage.getItem(`user-${emailAtivo}`))
  })

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("sessao") || ""
  })

  const [habitosSelecionados, setHabitosSelecionados] = useState(() => {
    const sessao = localStorage.getItem("sessao")
    if (!sessao) return []
    const salvo = localStorage.getItem(`habitos-${sessao}`)
    return salvo ? JSON.parse(salvo) : []
  })

    const [id] = useState(() => crypto.randomUUID())

    const [diasPorHabito, setDiasPorHabito] = useState(() => {
      if (!dadoUser) return {}  // ← guarda contra null
      const salvo = localStorage.getItem(`diasPorHabito-${dadoUser.id}`)
      return salvo ? JSON.parse(salvo) : {}
    })

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

   return (
    <Routes>
      <Route path="/" element={<Form 
        setDadoUser={setDadoUser}
        setHabitosSelecionados={setHabitosSelecionados}
        email={email} 
        setEmail={setEmail} 
        username={username} 
        setUsername={setUsername} 
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        id={id}
        setDiasPorHabito={setDiasPorHabito}
      />}/>

      <Route path="/Home" element={<Home dadoUser={dadoUser} email={email} habitosSelecionados={habitosSelecionados} setHabitosSelecionados={setHabitosSelecionados} 
      diasPorHabito={diasPorHabito} 
      setDiasPorHabito={setDiasPorHabito}/>}/>

      <Route path="/Habitos" element={<Habitos 
      dadosUser={dadoUser} 
      habitosSelecionados={habitosSelecionados}
      diasPorHabito={diasPorHabito}/>}/>

    <Route path="/Progresso" element={<Progresso diasPorHabito={diasPorHabito}/>} />
    <Route path="/Perfil" element={<Perfil dadosUser={dadoUser}/>} />
    
    </Routes>
  )
}

export default App
