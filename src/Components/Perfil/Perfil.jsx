import "./Perfil.css"
import Header from "../Header/Header"

function Perfil({ dadosUser, habitosSelecionados, diasPorHabito, logout }) {

  const habitos = habitosSelecionados.filter((h) => h.tipo === "good")
  const vicios = habitosSelecionados.filter((h) => h.tipo === "bad")

    const hoje = new Date()
    const anoAtual = hoje.getFullYear()
    const mesAtual = String(hoje.getMonth())

    function diasNoMesAtual(habitoVal) {
        const chave = `${habitoVal}-${anoAtual}-${mesAtual}`
        console.log("chave montada:", JSON.stringify(chave))
        console.log("chave existe:", chave in diasPorHabito)
        return diasPorHabito[chave]?.length ?? 0
    }


return (
    <>
        <Header />

        <div className="perfil-wrapper">

            <div className="perfil-card">
            <div className="perfil-header">
                <div className="perfil-avatar">
                {dadosUser.nome.charAt(0).toUpperCase()}
                </div>
                <div>
                <h2 className="perfil-nome">{dadosUser.nome}</h2>
                <span className="perfil-email">{dadosUser.email}</span>
                </div>
            </div>

            <div className="section">
                <p className="section-label">Hábitos</p>
                <ul className="perfil-list">
                {habitos.map((h) => (
                    <li key={h.val} className="perfil-item">
                    <span className="perfil-item-name">
                        {h.emoji} {h.val}
                    </span>
                    <span className="habit-badge habit-badge--good">
                        <span className="badge-dot" />
                        {diasNoMesAtual(h.val)} dias
                    </span>
                    </li>
                ))}
                </ul>
            </div>

            <div className="section">
                <p className="section-label">Vícios</p>
                <ul className="perfil-list">
                {vicios.map((v) => (
                    <li key={v.val} className="perfil-item">
                    <span className="perfil-item-name">
                        {v.emoji} {v.val}
                    </span>
                    <span className="habit-badge habit-badge--bad">
                        <span className="badge-dot" />
                        {diasNoMesAtual(v.val)} dias
                    </span>
                    </li>
                ))}
                </ul>
            </div>

            <button className="perfil-logout" onClick={logout}>
                <i className="ti ti-logout" /> Sair
            </button>
            </div>
        </div>
    </>

)
}

export default Perfil