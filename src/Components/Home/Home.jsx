import { useState } from "react"
import Header from "../Header/Header.jsx"
import Modal from "../Modal/Modal.jsx"
import Body from "../Body/Body.jsx"

const HABITS = {
  good: [
    { label: "treinar",   val: "treinar",   tipo: "good", emoji: "🏋️" },
    { label: "ler",       val: "ler",       tipo: "good", emoji: "📚" },
    { label: "meditar",   val: "meditar",   tipo: "good", emoji: "🧘" },
    { label: "estudar",   val: "estudar",   tipo: "good", emoji: "💻" },
  ],
  bad: [
    { label: "redes sociais", val: "redes sociais", tipo: "bad", emoji: "📱" },
    { label: "fumar",         val: "fumar",         tipo: "bad", emoji: "🚬" },
    { label: "álcool",        val: "álcool",        tipo: "bad", emoji: "🍺" },
    { label: "procrastinar",  val: "procrastinar",  tipo: "bad", emoji: "😴" },
    { label: "junk food",     val: "junk-food",     tipo: "bad", emoji: "🍔" },
    { label: "pornografia",   val: "pornografia",   tipo: "bad", emoji: "🔞" },
  ],
}

function Home({ dadoUser, modalAberto, setModalAberto, habitosSelecionados, toggleHabito }) {
  // lógica de calendário fica aqui e desce via props pro Body
  const hoje = new Date()
  const ano  = hoje.getFullYear()
  const mes  = hoje.getMonth()

  const nomeMes    = hoje.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
  const primeiroDia = new Date(ano, mes, 1).getDay()
  const diasNoMes  = new Date(ano, mes + 1, 0).getDate()

  const [diasPorHabito, setDiasPorHabito] = useState({})

  function selectDia(habitoVal, dia) {
    const dataDia = new Date(ano, mes, dia)
    if (dataDia > hoje) return

    setDiasPorHabito(prev => {
      const atual = prev[habitoVal] || []
      return {
        ...prev,
        [habitoVal]: atual.includes(dia)
          ? atual.filter(d => d !== dia)
          : [...atual, dia],
      }
    })
  }

  if (!dadoUser) return <p>Carregando...</p>

  return (
    <>
      <Header />
      {!modalAberto && <h2>Bem vindo {dadoUser.nome}</h2>}

      <button onClick={() => setModalAberto(true)}>AAAAAAAA</button>

      {modalAberto && (
        <Modal
          modalAberto={modalAberto}
          setModalAberto={setModalAberto}
          HABITS={HABITS}
          habitosSelecionados={habitosSelecionados}
          toggleHabito={toggleHabito}
        />
      )}

      <Body
        habitosSelecionados={habitosSelecionados}
        nomeMes={nomeMes}
        primeiroDia={primeiroDia}
        diasNoMes={diasNoMes}
        hoje={hoje}
        diasPorHabito={diasPorHabito}
        selectDia={selectDia}
      />
    </>
  )
}

export default Home