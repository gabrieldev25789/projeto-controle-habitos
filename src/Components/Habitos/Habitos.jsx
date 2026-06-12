import "./Habitos.css"
import Header from "../Header/Header.jsx"

function Habitos({dadosUser, habitosSelecionados, diasPorHabito }) {

    console.log(dadosUser)

  const habitos = habitosSelecionados.filter(h => h.tipo === "good")
  const vicios  = habitosSelecionados.filter(h => h.tipo === "bad")

  console.log(diasPorHabito)

  return (
    <>
    <Header /> 
        <div className="habitos-page">

        <section className="habitos-section">
            <div className="section-header">
            <span className="section-icon">🌱</span>
            <h2 className="section-title">Hábitos</h2>
            <span className="section-count">{habitos.length}</span>
            </div>
            <ul className="habitos-list">
                {habitos.map(h => (
                    <li key={h.val} className="habito-item habito-item--good">
                    <span className="habito-emoji">{h.emoji}</span>
                    <span className="habito-label">{h.label}</span>
                    </li>
                ))}
            </ul>
        </section>

        <section className="habitos-section">
            <div className="section-header">
            <span className="section-icon">🔥</span>
            <h2 className="section-title">Vícios</h2>
            <span className="section-count">{vicios.length}</span>
            </div>
            <ul className="habitos-list">
                {vicios.map(v => (
                    <li key={v.val} className="habito-item habito-item--bad">
                    <span className="habito-emoji">{v.emoji}</span>
                    <span className="habito-label">{v.label}</span>
                    </li>
                ))}
            </ul>
        </section>

        </div>
    </>
  )
}

export default Habitos