import "./Habitos.css"

function Habitos({ dadosUser, diasEscolhidos }) {
  const habitos = dadosUser.habitos
  const vicios = dadosUser.vicios

  console.log(diasEscolhidos)

  return (
    <div className="habitos-wrap">
      <div className="habitos-section habitos-section--good">
        <h2>🌱 bons hábitos</h2>
        <ul className="habitos-list">
          {habitos.map(h => <li key={h}>{h}</li>)}
        </ul>
      </div>

      <div className="habitos-section habitos-section--bad">
        <h2>🔥 vícios</h2>
        <ul className="habitos-list">
          {vicios.map(v => <li key={v}>{v}</li>)}
        </ul>
      </div>
      <ul>
        {diasEscolhidos.map((dia)=>(
          <li>{dia.dia}</li>
        ))}
      </ul>
    </div>
  )
}

export default Habitos