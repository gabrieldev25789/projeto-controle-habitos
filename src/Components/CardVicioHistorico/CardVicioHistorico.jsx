import { useState } from "react"

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

export function CardVicio({ v, diasPorHabito }) {
    const [aberto, setAberto] = useState(false)

    const registros = Object.entries(diasPorHabito).filter(([chave]) =>
        chave.startsWith(v.val)
    )

    return (
        <li className="vicio-item">
            <div className="vicio-info">
                <span className="vicio-emoji">{v.emoji}</span>
                <span className="vicio-label">{v.label}</span>
            </div>
            {registros.length > 0 && (
                <>
                    <button onClick={() => setAberto(p => !p)} className="vicio-toggle">
                        {aberto ? "▲ ocultar" : `▼ ver histórico (${registros.length} ${registros.length === 1 ? "mês" : "meses"})`}
                    </button>
                    {aberto && (
                        <ul className="vicio-registros">
                            {registros.map(([chave, dias]) => {
                                const partes  = chave.split("-")
                                const mesNum  = Number(partes.at(-1))
                                const ano     = partes.at(-2)
                                const mesObj  = meses.find(m => m.valor === mesNum + 1)
                                const nomeMes = mesObj?.mes
                                const diasMes = mesObj?.diasMes
                                return (
                                    <li key={chave} className="vicio-registro">
                                        <span className="vicio-registro-data">📅 {nomeMes} de {ano}</span>
                                        <span className="vicio-dias">{dias.length} {dias.length === 1 ? "dia" : "dias"} / {diasMes}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </>
            )}
        </li>
    )
}