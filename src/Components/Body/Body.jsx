import "./Body.css"
import CardHabito from "../CardHabito/CardHabito"

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