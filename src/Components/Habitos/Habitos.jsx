import "./Habitos.css"
import Header from "../Header/Header.jsx"
import { CardHabito } from "../CardHabitoHistorico/CardHabitoHistorico.jsx"
import { CardVicio } from "../CardVicioHistorico/CardVicioHistorico.jsx"

function Habitos({ habitosSelecionados, diasPorHabito }) {

    const habitos = habitosSelecionados.filter(h => h.tipo === "good")
    const vicios  = habitosSelecionados.filter(h => h.tipo === "bad")

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
                            <CardHabito key={h.val} h={h} diasPorHabito={diasPorHabito} />
                        ))}
                    </ul>
                </section>

                <section className="habitos-section">
                    <div className="section-header">
                        <span className="section-icon">🔥</span>
                        <h2 className="section-title">Vícios</h2>
                        <span className="section-count">{vicios.length}</span>
                    </div>
                    <ul className="vicios-list">
                        {vicios.map(v => (
                            <CardVicio key={v.val} v={v} diasPorHabito={diasPorHabito} />
                        ))}
                    </ul>
                </section>

            </div>
        </>
    )
}

export default Habitos