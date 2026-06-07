import Header from "../Header/Header.jsx"
import Modal from "../Modal/Modal.jsx"
import Body from "../Body/Body.jsx"

const HABITS = {
  good: [
    { label: "treinar",   val: "treinar",   tipo: "good", emoji: "🏋️" },
    { label: "ler",       val: "ler",       tipo: "good", emoji: "📚" },
    { label: "meditar",   val: "meditar",   tipo: "good", emoji: "🧘" },
    { label: "estudar",   val: "estudar",   tipo: "good", emoji: "💻" },
  ],
  bad: [
    { label: "redes sociais", val: "redes sociais", tipo: "bad", emoji: "📱" },
    { label: "fumar",         val: "fumar",         tipo: "bad", emoji: "🚬" },
    { label: "álcool",        val: "álcool",         tipo: "bad", emoji: "🍺" },
    { label: "procrastinar",  val: "procrastinar",  tipo: "bad", emoji: "😴" },
    { label: "junk food",     val: "junk-food",     tipo: "bad", emoji: "🍔" },
    { label: "pornografia",   val: "pornografia",   tipo: "bad", emoji: "🔞" },
  ],
}

function Home({dadoUser, modalAberto, setModalAberto, habitosSelecionados, toggleHabito }) {

  const salvo = dadoUser

  if(!salvo) return <p>Carregando...</p>

  function abreModal(){
    setModalAberto(true)
  }

  return (
    <>
      <Header />
      {!modalAberto && 
      <h2>Bem vindo {salvo.nome}</h2>}

      <button onClick={() => abreModal()}>AAAAAAAA</button>

      {modalAberto && <Modal 
      modalAberto={modalAberto} 
      setModalAberto={setModalAberto}
      HABITS={HABITS}
      habitosSelecionados={habitosSelecionados}
      toggleHabito={toggleHabito}/>}
      <Body habit={HABITS} 
      habitosSelecionados={habitosSelecionados}/>
    </>
  )

}

export default Home