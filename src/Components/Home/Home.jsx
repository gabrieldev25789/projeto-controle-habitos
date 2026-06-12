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

function Home({ dadoUser, habitosSelecionados, setHabitosSelecionados, diasPorHabito, setDiasPorHabito }) {

  const [modalAberto, setModalAberto] = useState(() => {
    const salvo = localStorage.getItem(`habitos-${dadoUser.id}`)
    const lista = salvo ? JSON.parse(salvo) : []
    return lista.length === 0
  })

  const hoje = new Date()

  function toggleHabito(habit) {
    setHabitosSelecionados(prev => {
      const novo = prev.find(h => h.val === habit.val)
        ? prev.filter(h => h.val !== habit.val)
        : [...prev, habit]
      localStorage.setItem(`habitos-${dadoUser.id}`, JSON.stringify(novo))
      return novo
    })
  }

  // agora recebe ano e mes do card
  function selectDia(habitoVal, dia, ano, mes) {
    const dataDia = new Date(ano, mes, dia)
    if (dataDia > hoje) return

    setDiasPorHabito(prev => {
      const chave = `${habitoVal}-${ano}-${mes}`  // chave com mês/ano
      const atual = prev[chave] || []
      const novo = {
        ...prev,
        [chave]: atual.includes(dia)
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

      {modalAberto && 
        <Modal
          modalAberto={modalAberto}
          setModalAberto={setModalAberto}
          HABITS={HABITS}
          habitosSelecionados={habitosSelecionados}
          toggleHabito={toggleHabito}
        />
      }
      
      <Body
        habitosSelecionados={habitosSelecionados}
        hoje={hoje}
        diasPorHabito={diasPorHabito}
        selectDia={selectDia}
      />
    </>
  )
}

export default Home