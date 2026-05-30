import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [entrar, setEntrar] = useState(false)

  const navigate = useNavigate();

  function addUser() {
    if (!username || !email || !password || !confirmPassword) {
      alert("Preencha todos os campos")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("E-mail inválido")
      return
    }

    if (password !== confirmPassword) {
      alert("As senhas não condizem")
      return
    }

    const novoUser = { username, email, password }
    setUser(novoUser)
    localStorage.setItem("user", JSON.stringify(novoUser))
    navigate('/cadastro')
  }

function entrarComUser() {
  if (!email || !password) {
    alert("Preencha todos os campos")
    return
  }

  const saved = localStorage.getItem("user")

  if (!saved) {
    alert("Nenhuma conta encontrada")
    return
  }

  const user = JSON.parse(saved)

  if (email !== user.email || password !== user.password) {
    alert("E-mail ou senha incorretos")
    return
  }

  setUser(user)
  navigate('/cadastro')
}

  return (
    !entrar ? (
      <div className="form-wrapper">

        {/* ── Lado esquerdo: descrição ── */}
        <div className="form-side-info">
          <div className="info-content">
            <span className="info-tag">Bem-vindo ao Habitus</span>
            <h2 className="info-title">
              Construa hábitos.<br />
              Quebre vícios.<br />
              <span className="info-highlight">Evolua todo dia.</span>
            </h2>
            <p className="info-text">
              O Habitus te ajuda a criar uma rotina saudável, acompanhar seu
              progresso e substituir maus hábitos por escolhas que realmente
              fazem a diferença na sua vida.
            </p>
            <ul className="info-list">
              <li>✦ Rastreie seus hábitos diários</li>
              <li>✦ Visualize seu progresso ao longo do tempo</li>
              <li>✦ Receba lembretes e mantenha a consistência</li>
              <li>✦ Celebre cada pequena vitória</li>
            </ul>
          </div>
        </div>

        {/* ── Lado direito: formulário ── */}
        <div className="form-side-form">
          <div className="form-card">

            <div className="form-header">
              <span className="form-logo">⬡</span>
              <h1 className="form-title">Criar conta</h1>
              <p className="form-subtitle">Comece sua jornada agora</p>
            </div>

            <form noValidate>

              <div className="field-group">
                <label htmlFor="username" className="field-label">
                  Nome de usuário
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">@</span>
                  <input
                    id="username"
                    type="text"
                    className="field-input"
                    placeholder="seu_usuario"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="email" className="field-label">
                  E-mail
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">✉</span>
                  <input
                    id="email"
                    type="email"
                    className="field-input"
                    placeholder="voce@email.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label htmlFor="password" className="field-label">
                    Senha
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">⬡</span>
                    <input
                      id="password"
                      type="password"
                      className="field-input"
                      placeholder="••••••••"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="confirm-password" className="field-label">
                    Confirmar senha
                  </label>
                  <div className="input-wrapper">
                    <span className="input-icon">⬡</span>
                    <input
                      id="confirm-password"
                      type="password"
                      className="field-input"
                      placeholder="••••••••"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button type="button" className="submit-btn" onClick={addUser}>
                <span className="btn-text">Criar conta</span>
                <span className="btn-arrow">→</span>
              </button>

            </form>

            <p className="form-footer">
              Já tem uma conta?{" "}
              <a href="#" className="form-link" onClick={() => setEntrar(true)}>
                Entrar
              </a>
            </p>

          </div>
        </div>

      </div>
    ) : (
      <div className="form-wrapper">

        <div className="form-side-info">
          <div className="info-content">
            <span className="info-tag">Bem-vindo de volta</span>
            <h2 className="info-title">
              Continue sua<br />
              jornada.<br />
              <span className="info-highlight">Evolua todo dia.</span>
            </h2>
          </div>
        </div>

        <div className="form-side-form">
          <div className="form-card">

            <div className="form-header">
              <span className="form-logo">⬡</span>
              <h1 className="form-title">Entrar</h1>
              <p className="form-subtitle">Continue de onde parou</p>
            </div>

            <form noValidate>

              <div className="field-group">
                <label htmlFor="email" className="field-label">
                  E-mail
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">✉</span>
                  <input
                    id="email"
                    type="email"
                    className="field-input"
                    placeholder="voce@email.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="password" className="field-label">
                  Senha
                </label>
                <div className="input-wrapper">
                  <span className="input-icon">⬡</span>
                  <input
                    id="password"
                    type="password"
                    className="field-input"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button type="button" className="submit-btn" onClick={() => entrarComUser()}>
                <span className="btn-text">Entrar</span>
                <span className="btn-arrow">→</span>
              </button>

            </form>

            <p className="form-footer">
              Não tem conta?{" "}
              <a href="#" className="form-link" onClick={() => setEntrar(false)}>
                Criar conta
              </a>
            </p>

          </div>
        </div>

      </div>
    )
  )
}

export default Form;