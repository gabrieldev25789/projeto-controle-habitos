import { Link, useLocation } from "react-router-dom"
import "./Header.css"

function Header() {
  const { pathname } = useLocation()

  return (
    <header className="header">
      <Link className="logo" to="/">
        <div className="logo-icon">⬡</div>
        <span className="logo-name">habi<span>tus</span></span>
      </Link>

      <nav className="header-nav">
        <Link className={`nav-item ${pathname === "/cadastro" ? "active" : ""}`} to="/cadastro">
          <i className="ti ti-home" />
          início
        </Link>
        <Link className={`nav-item ${pathname === "/habitos" ? "active" : ""}`} to="/habitos">
          <i className="ti ti-checkbox" />
          hábitos
        </Link>
        <Link className={`nav-item ${pathname === "/progresso" ? "active" : ""}`} to="/progresso">
          <i className="ti ti-chart-bar" />
          progresso
        </Link>
        <Link className={`nav-item ${pathname === "/config" ? "active" : ""}`} to="/config">
          <i className="ti ti-settings" />
          config
        </Link>
      </nav>

      <div className="header-right">
        <div className="streak">
          <div className="streak-dot" />
          7 dias seguidos
        </div>
        <div className="avatar">JD</div>
      </div>
    </header>
  )
}

export default Header