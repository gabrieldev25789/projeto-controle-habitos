import "./App.css"
import { Routes, Route } from "react-router-dom"
import  Form  from "./Components/Form/Form.jsx"
import Home from "./Components/Home/Home.jsx"
import { useState } from "react"


function App() {

  const [dadoUser, setDadoUser] = useState(()=>{
  const emailAtivo = localStorage.getItem("sessao")
    if(!emailAtivo) return null 
    return JSON.parse(localStorage.getItem(`user-${emailAtivo}`))
  })

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("sessao") || ""
  })

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

   return (
    <Routes>
      <Route path="/" 
      element={
      <Form setDadoUser={setDadoUser} 
      email={email} 
      setEmail={setEmail} 
      username={username} 
      setUsername={setUsername} 
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      />}/>

      <Route path="/Home" element={<Home dadoUser={dadoUser} email={email}/>}/>

    </Routes>
  )
}

export default App
