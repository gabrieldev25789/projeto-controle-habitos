import { useEffect, useState } from "react";
import "./Form.css";

function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, setUser] = useState({})

  function addUser(){
    if(!username || !email || !password || !confirmPassword) {
    alert("Preencha todos os campos")
    return 
    }

    if(password !== confirmPassword){ 
    alert("As senhas não condizem")
    return 
    
}
    setUser({username: username, email: email, password: password})
  }

  useEffect(()=>{
    console.log(user)
  },[user])

  return (
    <div className="form-wrapper">
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

          <button type="button" className="submit-btn" onClick={() => addUser()}>
            <span className="btn-text">Criar conta</span>
            <span className="btn-arrow">→</span>
          </button>

        </form>

        <p className="form-footer">
          Já tem uma conta?{" "}
          <a href="#" className="form-link">
            Entrar
          </a>
        </p>

      </div>
    </div>
  );
}

export default Form;