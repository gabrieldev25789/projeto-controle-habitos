import Header from "../Header/Header"
import "./Progresso.css"

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

function Progresso({ diasPorHabito }) {
    const registros = Object.entries(diasPorHabito).filter(([, dias]) => dias.length > 0)

return (
    <>
        <Header />
        <main className="progresso-page">
            <h2>📈 Progresso</h2>
            <ul className="progresso-list">
                {registros.map(([chave, dias]) => {
                    const partes = chave.split("-")
                    const mesNum = Number(partes.at(-1))
                    const ano = partes.at(-2)
                    const nomeHabito = partes.slice(0, -2).join("-")
                    const mesObj = meses.find(m => m.valor === mesNum)
                    const nomeMes = mesObj?.mes ?? mesNum

                    return (
                        <li key={chave} className="progresso-item">
                            <div className="progresso-item-header">
                                <span className="progresso-habito">{nomeHabito}</span>
                                <span className="progresso-data">📅 {nomeMes} de {ano}</span>
                            </div>
                            <div className="progresso-dias">
                                {dias.map(d => (
                                    <span key={d} className="progresso-dia">Dia {d}</span>
                                ))}
                            </div>
                            <span className="progresso-total">{dias.length} {dias.length === 1 ? "dia" : "dias"} marcados</span>
                        </li>
                    )
                })}
            </ul>
        </main>
    </>
)
}

export default Progresso