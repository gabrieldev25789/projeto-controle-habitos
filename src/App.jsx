import "./App.css"
import { Routes, Route } from "react-router-dom"
import  Form  from "./Components/Form/Form.jsx"
import Home from "./Components/Home/Home.jsx"
import { useState } from "react"


function App() {
  const [modalAberto, setModalAberto] = useState(false)

  const [dadoUser, setDadoUser] = useState(() => {
    const id = localStorage.getItem("sessao")
    if (!id) return null
    return JSON.parse(localStorage.getItem(`user-${id}`))
  })

  const [email, setEmail] = useState(() => {
    const id = localStorage.getItem("sessao")
    if (!id) return ""
    const user = JSON.parse(localStorage.getItem(`user-${id}`))
    return user?.email || ""
  })

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Form
        setDadoUser={setDadoUser}
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />} />
      <Route path="/Home" element={<Home
        dadoUser={dadoUser}
        modalAberto={modalAberto}
        setModalAberto={setModalAberto}
      />} />
    </Routes>
  )
}

export default App
