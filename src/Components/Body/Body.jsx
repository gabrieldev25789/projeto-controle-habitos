import "./Body.css"

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

function Body({ habitosSelecionados, nomeMes, primeiroDia, diasNoMes, hoje, diasPorHabito, selectDia }) {
  const habitos = habitosSelecionados.filter(h => h.tipo === "good")
  const vicios  = habitosSelecionados.filter(h => h.tipo === "bad")

  const props = { nomeMes, primeiroDia, diasNoMes, hoje, diasPorHabito, selectDia }

  return (
    <div className="body">

      {habitos.length > 0 && (
        <section className="section">
          <p className="section-label">Hábitos</p>
          <div className="cards-row">
            {habitos.map(habito => (
              <CardHabito key={habito.val} habito={habito} {...props} />
            ))}
          </div>
        </section>
      )}

      {vicios.length > 0 && (
        <section className="section">
          <p className="section-label">Vícios</p>
          <div className="cards-row">
            {vicios.map(habito => (
              <CardHabito key={habito.val} habito={habito} {...props} />
            ))}
          </div>
        </section>
      )}

    </div>
  )
}

export default Body