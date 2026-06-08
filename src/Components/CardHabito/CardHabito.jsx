import "./CardHabito.css"

const DIAS_SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]

function CardHabito({ habito, nomeMes, primeiroDia, diasNoMes, hoje, diasPorHabito, selectDia }) {
  
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
        <button type="button" className="cal-btn">‹</button>
        <span className="cal-month">{nomeMes}</span>
        <button type="button" className="cal-btn">›</button>
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
          const isHoje = dia === hoje.getDate()
          const marcado = (diasPorHabito[habito.val] || []).includes(dia)
          return (
            <div
              key={dia}
              className={[
                "cal-day",
                isHoje  ? "cal-day--today"                : "",
                marcado ? `cal-day--marked-${habito.tipo}` : "",
              ].filter(Boolean).join(" ")}
              onClick={() => selectDia(habito.val, dia)}
            >
              {dia}
            </div>
          )
        })}
      </div>

      <div className="card-footer">
        <span className="streak-label">sequência atual</span>
        <span className="streak-num">{(diasPorHabito[habito.val] || []).length} dias</span>
      </div>

    </div>
  )
}

export default CardHabito