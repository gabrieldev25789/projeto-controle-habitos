import "./CardHabito.css"
import { useState } from "react"

const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"]

function CardHabito({ habito, hoje, diasPorHabito, selectDia }) {
  const [mesAtual, setMesAtual] = useState(() => new Date())

  const ano  = mesAtual.getFullYear()
  const mes  = mesAtual.getMonth()

  const primeiroDia = new Date(ano, mes, 1).getDay()
  const diasNoMes   = new Date(ano, mes + 1, 0).getDate()
  const nomeMes     = mesAtual.toLocaleString("pt-BR", { month: "long", year: "numeric" })

  const chave = `${habito.val}-${ano}-${mes}`

  function irParaMesAnterior() {
    setMesAtual(m => new Date(m.getFullYear(), m.getMonth() - 1, 1))
  }

  function irParaProximoMes() {
    setMesAtual(m => new Date(m.getFullYear(), m.getMonth() + 1, 1))
  }

  return (
    <div className="habit-card">

      <div className="card-header">
        <span className={`habit-badge habit-badge--${habito.tipo}`}>
          <span className="badge-dot" />
          {habito.label}
        </span>
        <button type="button" className="card-menu">⋯</button>
      </div>

      <div className="cal-nav">
        <button type="button" className="cal-btn" onClick={irParaMesAnterior}>‹</button>
        <span className="cal-month">{nomeMes}</span>
        <button type="button" className="cal-btn" onClick={irParaProximoMes}>›</button>
      </div>

      <div className="cal-grid">
        {DIAS_SEMANA.map(d => (
          <div key={d} className="cal-label">{d}</div>
        ))}

        {Array.from({ length: primeiroDia }).map((_, i) => (
          <div key={`empty-${i}`} className="cal-day cal-day--empty" />
        ))}

        {Array.from({ length: diasNoMes }).map((_, i) => {
          const dia = i + 1
          const isHoje =
            mes === hoje.getMonth() &&
            ano === hoje.getFullYear() &&
            dia === hoje.getDate()
          const marcado = (diasPorHabito[chave] || []).includes(dia)

          return (
            <div
              key={dia}
              className={[
                "cal-day",
                isHoje  ? "cal-day--today"                : "",
                marcado ? `cal-day--marked-${habito.tipo}` : "",
              ].filter(Boolean).join(" ")}
              onClick={() => selectDia(habito.val, dia, ano, mes)}
            >
              {dia}
            </div>
          )
        })}
      </div>

      <div className="card-footer">
        <span className="streak-label">sequência atual</span>
        <span className="streak-num">{(diasPorHabito[chave] || []).length} dias</span>
      </div>

    </div>
  )
}

export default CardHabito