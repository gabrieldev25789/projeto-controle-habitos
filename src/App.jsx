import "./App.css"
import { Routes, Route } from "react-router-dom"
import  Form  from "./Components/Form/Form.jsx"
import Home from "./Components/Home/Home.jsx"
import { useState } from "react"


function App() {
  const [modalAberto, setModalAberto] = useState(false)

    const [dadoUser, setDadoUser] = useState(()=>{
    const emailAtivo = localStorage.getItem("sessao")
    if(!emailAtivo) return null 
    return JSON.parse(localStorage.getItem(`user-${emailAtivo}`))
  })

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("sessao") || ""
  })

const [habitosSelecionados, setHabitosSelecionados] = useState([])

function toggleHabito(habit) {
  setHabitosSelecionados(prev =>
    prev.find(h => h.val === habit.val)
      ? prev.filter(h => h.val !== habit.val)
      : [...prev, habit]
  )
} 

   return (
    <Routes>
      <Route path="/" element={<Form setDadoUser={setDadoUser} email={email} setEmail={setEmail}/>} />
      <Route path="/Home" element={<Home dadoUser={dadoUser} email={email} modalAberto={modalAberto} setModalAberto={setModalAberto} habitosSelecionados={habitosSelecionados} toggleHabito={toggleHabito}/>} />
    </Routes>
  )
}

export default App
