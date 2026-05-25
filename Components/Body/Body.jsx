import "./body.css"

function Body() {

  return (
    <div className="overlay">
      <div className="modal">
 
        <div className="step-bar">
          <div className="step-dot active-bad" />
          <div className="step-dot" />
          <div className="step-dot" />
        </div>
 
        <div className="step" id="step-1">
          <div className="step-header">
            <div className="icon-badge icon-badge-bad" />
            <div>
              <h2 className="step-title step-title-bad">Quais vícios você quer largar?</h2>
              <p className="step-subtitle">Selecione os que mais te atrapalham.</p>
            </div>
          </div>
 
          <hr className="divider" />
 
          <div className="chips">
            <div className="chip">Cigarro</div>
            <div className="chip">Álcool</div>
            <div className="chip">Redes sociais</div>
            <div className="chip">Procrastinação</div>
            <div className="chip">Compras impulsivas</div>
            <div className="chip">Junk food</div>
            <div className="chip">Sono irregular</div>
            <div className="chip">Sedentarismo</div>
          </div>
 
          <div className="step-actions">
            <span className="count-badge">0 selecionados</span>
            <button className="btn btn-bad">Próximo →</button>
          </div>
        </div>
 
        <div className="step" id="step-2">
          <div className="step-header">
            <div className="icon-badge icon-badge-good" />
            <div>
              <h2 className="step-title step-title-good">Quais hábitos você quer criar?</h2>
              <p className="step-subtitle">Escolha os que quer cultivar a partir de hoje.</p>
            </div>
          </div>
 
          <hr className="divider" />
 
          <div className="chips">
            <div className="chip">Exercício</div>
            <div className="chip">Meditação</div>
            <div className="chip">Leitura</div>
            <div className="chip">Beber água</div>
            <div className="chip">Dormir cedo</div>
            <div className="chip">Diário</div>
            <div className="chip">Gratidão</div>
            <div className="chip">Aprender algo</div>
          </div>
 
          <div className="step-actions">
            <button className="btn btn-back">← Voltar</button>
            <div className="actions-right">
              <span className="count-badge">0 selecionados</span>
              <button className="btn btn-good">Finalizar →</button>
            </div>
          </div>
        </div>
 
        <div className="step" id="step-3">
          <div className="finish-icon" />
          <h2 className="finish-title">Tudo pronto!</h2>
          <p className="finish-subtitle">Seus hábitos foram configurados. Vamos começar a jornada.</p>
 
          <div className="summary-group">
            <p className="summary-label summary-label-bad">🚫 Largando:</p>
            <div className="summary-tags">
              <span className="tag tag-bad">Cigarro</span>
              <span className="tag tag-bad">Álcool</span>
            </div>
          </div>
 
          <div className="summary-group">
            <p className="summary-label summary-label-good">✅ Criando:</p>
            <div className="summary-tags">
              <span className="tag tag-good">Exercício</span>
              <span className="tag tag-good">Leitura</span>
            </div>
          </div>
 
          <div className="step-actions step-actions-end">
            <button className="btn btn-good">Ir para o app →</button>
          </div>
        </div>
 
      </div>
    </div>
  )
  
}

export default Body