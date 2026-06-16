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
    const hoje = new Date()
    const [ano, setAno] = useState(hoje.getFullYear())
    const [mesIdx, setMesIdx] = useState(hoje.getMonth())

    const chave = `${v.val}-${ano}-${mesIdx}`
    const dias = diasPorHabito[chave] ?? []
    const mesObj = meses.find(m => m.valor === mesIdx)
    const nomeMes = mesObj?.mes ?? mesIdx
    const diasMes = mesObj?.diasMes ?? "?"

    function avancar() {
        if (mesIdx === 11) {
            setMesIdx(0)
            setAno(a => a + 1)
        } else {
            setMesIdx(m => m + 1)
        }
    }

    function voltar() {
        if (mesIdx === 0) {
            setMesIdx(11)
            setAno(a => a - 1)
        } else {
            setMesIdx(m => m - 1)
        }
    }

    return (
        <li className="vicio-item">
            <div className="vicio-info">
                <span className="vicio-emoji">{v.emoji}</span>
                <span className="vicio-label">{v.label}</span>
            </div>

            <div className="habito-nav">
                <button onClick={voltar} className="habito-nav-btn">‹</button>
                <span className="habito-nav-mes">{nomeMes} de {ano}</span>
                <button onClick={avancar} className="habito-nav-btn">›</button>
            </div>

            <span className="vicio-dias">
                {dias.length} {dias.length === 1 ? "dia" : "dias"} / {diasMes}
            </span>
        </li>
    )
}