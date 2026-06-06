import { useEffect, useState } from "react"
import "./Body.css"

// Labels dos dias da semana (Domingo → Sábado)
const DAYS_LABEL = ["D", "S", "T", "Q", "Q", "S", "S"]

// Componente de calendário individual para cada hábito/vício
function HabitCalendar({ name, type, email, onDiaEscolhido }) {

  // Captura as informações do mês atual
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()         // 0-indexado (janeiro = 0)
  const today = now.getDate()
  const daysInMonth = new Date(year, month + 1, 0).getDate() // último dia do mês atual
  const firstDay = new Date(year, month, 1).getDay()         // dia da semana do dia 1 (0 = domingo)
  const monthName = now.toLocaleString("pt-BR", { month: "long", year: "numeric" })

  // Chave única no localStorage por usuário, hábito, ano e mês
  const storageKey = `marked-${email}-${name}-${year}-${month}`

  // Inicializa os dias marcados buscando do localStorage (lazy initialization)
  // O estado é um objeto: { 1: true, 5: false, 15: true, ... }
  const [marked, setMarked] = useState(() => {
    const saved = localStorage.getItem(storageKey)
    return saved ? JSON.parse(saved) : {}
  })

  // Alterna um dia entre marcado/desmarcado ao clicar
  function toggleDay(day) {
    if (day > today) return // impede marcar dias futuros

    setMarked(prev => {
      const next = { ...prev, [day]: !prev[day] } // inverte o valor do dia clicado
      localStorage.setItem(storageKey, JSON.stringify(next)) // persiste imediatamente
      return next
    })

    // Notifica o pai com o dia e o tipo (hábito ou vício) — usa optional chaining por segurança
    onDiaEscolhido?.({ dia: day, [type === "good" ? "habito" : "vicio"]: name })
  }

  // Espaços em branco para alinhar o dia 1 na coluna correta da semana
  const blanks = Array(firstDay).fill(null)

  // Array [1, 2, 3, ..., daysInMonth]
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className={`card card--${type}`}> {/* card--good ou card--bad */}
      <div className="card-header">
        <span className="habit-name">{name}</span>
        <span className="month-label">{monthName}</span>
      </div>

      <div className="cal">
        {/* Cabeçalho com as letras dos dias da semana */}
        <div className="cal-header">
          {DAYS_LABEL.map((l, i) => (
            <span key={i} className="cal-label">{l}</span>
          ))}
        </div>

        <div className="cal-grid">
          {/* Células vazias para alinhar o calendário */}
          {blanks.map((_, i) => (
            <div key={`b-${i}`} className="cal-day cal-day--empty" />
          ))}

          {/* Células dos dias do mês */}
          {days.map(day => (
            <div
              key={day}
              className={[
                "cal-day",
                day > today
                  ? "cal-day--future"                                   // dia ainda não chegou
                  : `cal-day--${type}-${marked[day] ? "on" : "off"}`,  // ex: cal-day--good-on
                day === today ? "cal-day--today" : ""                   // destaca o dia atual
              ].join(" ")}
              onClick={() => toggleDay(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Componente pai que renderiza todos os calendários do usuário
function Body({ dadosUser = {}, onDiaEscolhido, diasEscolhidos, setDiasEscolhidos }) {

  // Intermediário: adiciona ao estado local E repassa pro pai (App)
  function handleDiaEscolhido(info) {
    setDiasEscolhidos(prev => [...prev, info])
    onDiaEscolhido?.(info) // opcional — só chama se o pai passou a prop
  }

  // Log de debug: dispara toda vez que diasEscolhidos mudar
  useEffect(() => {
    console.log(diasEscolhidos)
  }, [diasEscolhidos])

  return (
    <div className="body-wrap">
      <h2>Bem vindo {dadosUser.user?.username}</h2>

      {/* Seção de hábitos bons — só renderiza se houver ao menos 1 */}
      {dadosUser.habitos?.length > 0 && (
        <div className="section-label section-label--good">🌱 hábitos bons</div>
      )}
      {dadosUser.habitos?.map(h => (
        <HabitCalendar
          key={h}
          name={h}
          type="good"
          email={dadosUser.user?.email}
          onDiaEscolhido={handleDiaEscolhido}
        />
      ))}

      {/* Seção de vícios — mesmo padrão */}
      {dadosUser.vicios?.length > 0 && (
        <div className="section-label section-label--bad">🔥 vícios</div>
      )}
      {dadosUser.vicios?.map(v => (
        <HabitCalendar
          key={v}
          name={v}
          type="bad"
          email={dadosUser.user?.email}
          onDiaEscolhido={handleDiaEscolhido}
        />
      ))}
    </div>
  )
}

export default Body