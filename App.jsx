import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({})

  return (
    <>
      <h2>Bem vindo</h2>

        <form>
          <label>Nome de usuário</label>
          <input type="text" placeholder="seu_usuario" />

          <label>E-mail</label>
          <input type="email" placeholder="voce@email.com" />

          <label>Senha</label>
          <input type="password" placeholder="••••••••" />

          <label>Confirmar senha</label>
          <input type="password" placeholder="••••••••" />

          <button type="submit">Criar conta</button>
        </form>
    </>
  )
}

export default App
