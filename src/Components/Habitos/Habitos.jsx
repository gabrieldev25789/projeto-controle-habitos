import "./Habitos.css"
import Header from "../Header/Header.jsx"

function Habitos({ habitosSelecionados, diasPorHabito }) {

  const habitos = habitosSelecionados.filter(h => h.tipo === "good")
  const vicios  = habitosSelecionados.filter(h => h.tipo === "bad")

const meses = [
    { valor: 1,  mes: "janeiro",   diasMes: 31 },
    { valor: 2,  mes: "fevereiro", diasMes: 28 }, 
    { valor: 3,  mes: "março",     diasMes: 31 },
    { valor: 4,  mes: "abril",     diasMes: 30 },
    { valor: 5,  mes: "maio",      diasMes: 31 },
    { valor: 6,  mes: "junho",     diasMes: 30 },
    { valor: 7,  mes: "julho",     diasMes: 31 },
    { valor: 8,  mes: "agosto",    diasMes: 31 },
    { valor: 9,  mes: "setembro",  diasMes: 30 },
    { valor: 10, mes: "outubro",   diasMes: 31 },
    { valor: 11, mes: "novembro",  diasMes: 30 },
    { valor: 12, mes: "dezembro",  diasMes: 31 },
]

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
          {habitos.map(h => {
            const registros = Object.entries(diasPorHabito).filter(([chave]) =>
              chave.startsWith(h.val)
            )
            return (
              <li key={h.val} className="habito-item habito-item--good">
                <div className="habito-info">
                  <span className="habito-emoji">{h.emoji}</span>
                  <span className="habito-label">{h.label}</span>
                </div>
                {registros.length > 0 && (
                  <ul className="habito-registros">
                {registros.map(([chave, dias]) => {
                    const partes   = chave.split("-")
                    const mesNum   = Number(partes.at(-1))
                    const ano      = partes.at(-2)
                    const mesObj   = meses.find(m => m.valor === mesNum + 1)
                    const nomeMes  = mesObj?.mes
                    const diasMes  = mesObj?.diasMes

                    return (
                        <li key={chave} className="vicio-registro">
                            <span className="vicio-registro-data">📅 {nomeMes} de {ano}</span>
                            <span className="vicio-dias">{dias.length} {dias.length === 1 ? "dia" : "dias"} / {diasMes}</span>
                        </li>
                    )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </section>

     <section className="habitos-section">
            <div className="section-header">
                <span className="section-icon">🔥</span>
                <h2 className="section-title">Vícios</h2>
                <span className="section-count">{vicios.length}</span>
            </div>
            <ul className="vicios-list">
                {vicios.map(v => {
                const registros = Object.entries(diasPorHabito).filter(([chave]) =>
                    chave.startsWith(v.val)
                )
                return (
                    <li key={v.val} className="vicio-item">
                    <div className="vicio-info">
                        <span className="vicio-emoji">{v.emoji}</span>
                        <span className="vicio-label">{v.label}</span>
                    </div>
                    {registros.length > 0 && (
                        <ul className="vicio-registros">
                 {registros.map(([chave, dias]) => {
                    const partes   = chave.split("-")
                    const mesNum   = Number(partes.at(-1))
                    const ano      = partes.at(-2)
                    const mesObj   = meses.find(m => m.valor === mesNum + 1)
                    const nomeMes  = mesObj?.mes
                    const diasMes  = mesObj?.diasMes

                    return (
                        <li key={chave} className="vicio-registro">
                            <span className="vicio-registro-data">📅 {nomeMes} de {ano}</span>
                            <span className="vicio-dias">{dias.length} {dias.length === 1 ? "dia" : "dias"} / {diasMes}</span>
                        </li>
                    )
                        })}
                        </ul>
                    )}
                    </li>
                )
                })}
            </ul>
        </section>

    </div>
  </>
)
}

export default Habitos