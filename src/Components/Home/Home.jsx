import { useState } from "react"
import Header from "../Header/Header.jsx"
import Modal from "../Modal/Modal.jsx"

function Home({ email }) {

  const [modalAberto, setModalAberto] = useState(false)

  const salvo = JSON.parse(localStorage.getItem(`user-${email}`))

  if(!salvo) return <p>Carregando...</p>

  function abreModal(){
    setModalAberto(true)
  }

  return (
    <>
      <Header />
      {!modalAberto && 
      <h2>Bem vindo {salvo.nome}</h2>}

      <button onClick={() => abreModal()}>AAAAAAAA</button>

      {modalAberto && <Modal />}
    </>
  )

}

export default Home