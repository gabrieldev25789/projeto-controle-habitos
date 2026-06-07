import "./Body.css"

function Body({ habitosSelecionados }) {
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = hoje.getMonth()

  const nomeMes = hoje.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })
  const primeiroDia = new Date(ano, mes, 1).getDay()
  const diasNoMes = new Date(ano, mes + 1, 0).getDate()

  const DIAS_SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"]

  return (
    <div className="body">
      {habitosSelecionados.map((habito) => (
        <div key={habito.val} className="habit-card">

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
              return (
                <div key={dia} className={`cal-day ${isHoje ? "cal-day--today" : ""}`}>
                  {dia}
                </div>
              )
            })}
          </div>

          <div className="card-footer">
            <span className="streak-label">sequência atual</span>
            <span className="streak-num">— dias</span>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Body