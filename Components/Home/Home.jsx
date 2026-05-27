// Home.jsx
import { useState } from "react"
import Header from "../Header/Header"
import Body from "../Body/Body"
import Modal from "../Modal/Modal"

function Home() {
  const [showModal, setShowModal] = useState(true)

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
      setHabitosSelecionados={setHabitosSelecionados}/>
      }

      <Body 
      habitosSelecionados={habitosSelecionados} 
      viciosSelecionados={viciosSelecionados}/>
    </>
  )
}

export default Home