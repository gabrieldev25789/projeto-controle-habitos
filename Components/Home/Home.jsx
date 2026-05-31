import { useState } from "react"
import Header from "../Header/Header"
import Body from "../Body/Body"
import Modal from "../Modal/Modal"

function Home({ usuarioSalvo, dadosUser, setDadosUser }) {

    const [showModal, setShowModal] = useState(() => {
    const emailAtivo = localStorage.getItem("sessao")
    if (!emailAtivo) return true

    const dadosSalvos = localStorage.getItem(`dadosUser-${emailAtivo}`)
    if (!dadosSalvos) return true

    const dados = JSON.parse(dadosSalvos)
    if (!dados.user) return true

    return dados.user.email !== emailAtivo
  })

  const [viciosSelecionados, setViciosSelecionados] = useState([])
  const [habitosSelecionados, setHabitosSelecionados] = useState([])

  return (
    <>
      <Header />

      {showModal && (
        <Modal
          onFinish={() => setShowModal(false)}
          viciosSelecionados={viciosSelecionados}
          setViciosSelecionados={setViciosSelecionados}
          habitosSelecionados={habitosSelecionados}
          setHabitosSelecionados={setHabitosSelecionados}
          usuarioSalvo={usuarioSalvo}
          dadosUser={dadosUser}
          setDadosUser={setDadosUser}
        />
      )}

      <Body dadosUser={dadosUser} />
    </>
  )
}

export default Home