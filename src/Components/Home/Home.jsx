function Home({ email }) {

  const salvo = JSON.parse(localStorage.getItem(`user-${email}`))

  if(!salvo) return <p>Carregando...</p>

  return (
    <>
      <h2>Bem vindo {salvo.nome}</h2>
    </>
  )

}

export default Home