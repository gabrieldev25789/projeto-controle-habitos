import "./Header.css"

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        <div className="logo-icon">⬡</div>
        <span className="logo-name">habi<span>tus</span></span>
      </a>

      <nav className="header-nav">
        <a className="nav-item active" href="/">
          <i className="ti ti-home" />
          início
        </a>
        <a className="nav-item" href="/habitos">
          <i className="ti ti-checkbox" />
          hábitos
        </a>
        <a className="nav-item" href="/progresso">
          <i className="ti ti-chart-bar" />
          progresso
        </a>
        <a className="nav-item" href="/config">
          <i className="ti ti-settings" />
          config
        </a>
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