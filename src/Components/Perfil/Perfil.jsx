import "./Perfil.css"
import Header from "../Header/Header"

function Perfil({ dadosUser, habitosSelecionados, diasPorHabito }) {

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

  console.log(diasPorHabito)

  return (
    <>
      <Header />
      <h2>Bem vindo, <strong>{dadosUser.nome}</strong></h2>

      <h3>Seus hábitos:</h3>
      <ul>
        {habitos.map((h) => (
          <li key={h.val}>
            {h.val} — {diasNoMesAtual(h.val)} dias esse mês
          </li>
        ))}
      </ul>

      <h3>Seus vícios:</h3>
      <ul>
        {vicios.map((v) => (
          <li key={v.val}>
            {v.val} — {diasNoMesAtual(v.val)} dias esse mês
          </li>
        ))}
      </ul>
    </>
  )
}

export default Perfil