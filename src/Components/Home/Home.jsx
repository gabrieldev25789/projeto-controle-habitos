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

function Home({ dadoUser, modalAberto, setModalAberto }) {
  const hoje = new Date()
  const ano  = hoje.getFullYear()
  const mes  = hoje.getMonth()

  const nomeMes     = hoje.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
  const primeiroDia = new Date(ano, mes, 1).getDay()
  const diasNoMes   = new Date(ano, mes + 1, 0).getDate()

  const [habitosSelecionados, setHabitosSelecionados] = useState(() => {
    const salvo = localStorage.getItem(`habitos-${dadoUser.id}`)
    return salvo ? JSON.parse(salvo) : []
  })

  const [diasPorHabito, setDiasPorHabito] = useState(() => {
    const salvo = localStorage.getItem(`diasPorHabito-${dadoUser.id}`)
    return salvo ? JSON.parse(salvo) : {}
  })

  function toggleHabito(habit) {
    setHabitosSelecionados(prev => {
      const novo = prev.find(h => h.val === habit.val)
        ? prev.filter(h => h.val !== habit.val)
        : [...prev, habit]
      localStorage.setItem(`habitos-${dadoUser.id}`, JSON.stringify(novo))
      return novo
    })
  }

  function selectDia(habitoVal, dia) {
    const dataDia = new Date(ano, mes, dia)
    if (dataDia > hoje) return

    setDiasPorHabito(prev => {
      const atual = prev[habitoVal] || []
      const novo = {
        ...prev,
        [habitoVal]: atual.includes(dia)
          ? atual.filter(d => d !== dia)
          : [...atual, dia],
      }
      localStorage.setItem(`diasPorHabito-${dadoUser.id}`, JSON.stringify(novo))
      return novo
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