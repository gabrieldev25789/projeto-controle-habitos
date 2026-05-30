// Home.jsx
import { useState } from "react"
import Header from "../Header/Header"
import Body from "../Body/Body"
import Modal from "../Modal/Modal"

function Home( {usuarioSalvo} ) {

  const [showModal, setShowModal] = useState(() => {
  const dadosUser = localStorage.getItem("dadosUser")
  const user = localStorage.getItem("user")

  if (!dadosUser || !user) return true // conta nova, mostra modal

  const dados = JSON.parse(dadosUser)
  const userAtual = JSON.parse(user)

  // se o email do usuário atual é diferente do que configurou os hábitos, mostra modal
  return dados.user.email !== userAtual.email
})

  const [viciosSelecionados, setViciosSelecionados] = useState([])
  const [habitosSelecionados, setHabitosSelecionados] = useState([])
  
  return (
    <>
      <Header />

      {showModal && <Modal 
      onFinish={() => setShowModal(false)} 
      viciosSelecionados={viciosSelecionados}
      setViciosSelecionados={setViciosSelecionados}
      habitosSelecionados={habitosSelecionados}
      setHabitosSelecionados={setHabitosSelecionados} 
      usuarioSalvo={usuarioSalvo}/>
      }

      <Body 
      habitosSelecionados={habitosSelecionados} 
      viciosSelecionados={viciosSelecionados}/>
    </>
  )
}

export default Home