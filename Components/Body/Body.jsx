import { useState } from "react"
import "./body.css"

const BAD_HABITS = [
  { label: "redes sociais", val: "redes sociais" },
  { label: "fumar",         val: "fumar" },
  { label: "álcool",        val: "álcool" },
  { label: "procrastinar",  val: "procrastinar" },
  { label: "junk food",     val: "junk-food" },
  { label: "pornografia",   val: "pornografia" },
]

function Body() {
  const [selecionados, setSelecionados] = useState([]) 

    function toggleVicio(val) {
      setSelecionados(prev => {
        if (!prev.includes(val) && prev.length >= 3) return prev // bloqueia
        return prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
      })
    }

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
            {BAD_HABITS.map(habit => (
              <button
                key={habit.val}
                type="button"
                className={`chip chip--bad ${selecionados.includes(habit.val) ? "chip--selected" : ""}`}
                onClick={() => toggleVicio(habit.val)}
              >
                {selecionados.includes(habit.val) && <span className="chip-check">✓</span>}
                {habit.label}
              </button>
            ))}
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
            {selecionados.length > 0 ? (
              <span className="selected-count">
                <span className="selected-count__num">{selecionados.length}</span> selecionados
              </span>
            ) : (
              <button type="button" className="btn-skip">pular</button>
            )}
          </div>
          <button type="button" className="btn-next">continuar →</button>
        </div>
      </div>
    </div>
  )
}

export default Body