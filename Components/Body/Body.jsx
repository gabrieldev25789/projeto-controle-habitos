import "./body.css"

function Body() {

  return (
    <div className="modal-overlay">
      <div className="modal">
 
        {/* ── Topo ── */}
        <div className="modal-body">
 
          <div className="steps">
            <div className="step-dot step-dot--active" />
            <div className="step-dot" />
            <span className="step-label">passo 1 de 2</span>
          </div>
 
          <div className="modal-icon modal-icon--bad">🔥</div>
          <h2 className="modal-title">Quais vícios você quer largar?</h2>
          <p className="modal-sub">
            Seja honesto. Sem julgamentos — o Habitus está aqui pra te ajudar a mudar.
          </p>
 
          <p className="chips-label">sugestões</p>
          <div className="chips">
            <button type="button" className="chip chip--bad">redes sociais</button>
            <button type="button" className="chip chip--bad chip--selected">
              <span className="chip-check">✓</span>fumar
            </button>
            <button type="button" className="chip chip--bad">álcool</button>
            <button type="button" className="chip chip--bad">procrastinar</button>
            <button type="button" className="chip chip--bad">junk food</button>
            <button type="button" className="chip chip--bad">dormir tarde</button>
            <button type="button" className="chip chip--bad">gastos impulsivos</button>
            <button type="button" className="chip chip--bad">sedentarismo</button>
            <button type="button" className="chip chip--bad">pornografia</button>
          </div>
 
          <div className="custom-row">
            <input
              className="custom-input"
              type="text"
              placeholder="ou escreva o seu..."
              maxLength={40}
            />
            <button type="button" className="custom-add">+ adicionar</button>
          </div>
 
        </div>
 
        {/* ── Footer ── */}
        <div className="modal-footer">
          <div className="footer-left">
            <button type="button" className="btn-skip">pular</button>
            {/* trocar pelo bloco abaixo quando houver seleção: */}
            {/* <span className="selected-count">
              <span className="selected-count__num">2</span> selecionados
            </span> */}
          </div>
          <button type="button" className="btn-next">continuar →</button>
        </div>
 
      </div>
    </div>
  )
  
}

export default Body