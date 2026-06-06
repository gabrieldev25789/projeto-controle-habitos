import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'
import Habitos from './Components/Habitos/Habitos';


function App() {

  // Estado que guarda UM dia escolhido por vez (array que vai acumulando escolhas)
  const [diaEscolhido, setDiaEscolhido] = useState([])
  console.log(diaEscolhido) // 👈 log de debug, pode remover quando não precisar mais

  // Estado que guarda TODOS os dias escolhidos (passado para outros componentes)
  const [diasEscolhidos, setDiasEscolhidos] = useState([])

  // Adiciona uma nova escolha ao array diaEscolhido sem sobrescrever as anteriores
  function handleDiaEscolhido(escolha) {
    setDiaEscolhido(prev => [...prev, escolha])
  }

  // Inicializa o usuário logado buscando direto do localStorage
  // Usa função no useState para rodar só uma vez (lazy initialization)
  const [user, setUser] = useState(() => {
    const emailAtivo = localStorage.getItem("sessao") // pega o email da sessão ativa
    if (!emailAtivo) return {} // se não tem sessão, retorna objeto vazio
    const saved = localStorage.getItem(`user-${emailAtivo}`) // busca dados do usuário pelo email
    return saved ? JSON.parse(saved) : {} // se encontrou, parseia o JSON; senão, objeto vazio
  })

  // Mesmo padrão do user: inicializa os dados extras do usuário (hábitos, preferências, etc.)
  const [dadosUser, setDadosUser] = useState(() => {
    const emailAtivo = localStorage.getItem("sessao")
    if (!emailAtivo) return {}
    const dados = localStorage.getItem(`dadosUser-${emailAtivo}`)
    return dados ? JSON.parse(dados) : {}
  })

  // Chamada ao fazer login: salva a sessão ativa e atualiza os estados de user e dadosUser
  function handleSetUser(novoUser) {
    localStorage.setItem("sessao", novoUser.email) // persiste o email como sessão ativa
    setUser(novoUser) // atualiza o estado com os dados do novo usuário
    const dados = localStorage.getItem(`dadosUser-${novoUser.email}`) // carrega os dados desse usuário
    setDadosUser(dados ? JSON.parse(dados) : {}) // atualiza dadosUser (ou vazio se for novo)
  }

  return (
    // Define as rotas da aplicação
    <Routes>
      {/* Rota raiz: tela de login/cadastro — recebe o handler de login */}
      <Route path="/" element={<Form setUser={handleSetUser} />} />

      {/* Rota principal: dashboard/home — recebe usuário, dados e handlers de dias */}
      <Route path="/cadastro" element={
        <Home
          usuarioSalvo={user}
          dadosUser={dadosUser}
          setDadosUser={setDadosUser}
          onDiaEscolhido={handleDiaEscolhido}
          diasEscolhidos={diasEscolhidos}
          setDiasEscolhidos={setDiasEscolhidos}
        />}
      />

      {/* Rota de hábitos: recebe os dados do usuário e os dias escolhidos */}
      <Route path="/habitos" element={<Habitos dadosUser={dadosUser} diasEscolhidos={diasEscolhidos}/>} />
    </Routes>
  )
}

export default App
