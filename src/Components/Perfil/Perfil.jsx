import "./Perfil.css"
import Header from "../Header/Header"

function Perfil({dadosUser}) {
    console.log(dadosUser)

  return (
    <>
    <Header />
    <h2>Bem vindo ao seu perfil <strong>{dadosUser.nome}</strong></h2>
    </>
  )
}

export default Perfil