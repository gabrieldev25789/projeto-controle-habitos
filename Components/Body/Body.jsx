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
  const [passo, setPasso] = useState(1)
  const [selecionados, setSelecionados] = useState([])

  function toggleVicio(val) {
    setSelecionados(prev => {
      if (!prev.includes(val) && prev.length >= 3) return prev
      return prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    })
  }

  function continuar() {
    setPasso(2)
  }

  return (
    <>

      {/* ────────────── PASSO 1 ────────────── */}
      {passo === 1 && (
        <div className="modal-overlay">
          <div className="modal">

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
              <button type="button" className="btn-next" onClick={continuar}>
                continuar →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ────────────── PASSO 2 ────────────── */}
      {passo === 2 && (
        <div className="modal-overlay">
          <div className="modal">

            <div className="modal-body">
              <div className="steps">
                <div className="step-dot step-dot--done" />
                <div className="step-dot step-dot--active" />
                <span className="step-label">passo 2 de 2</span>
              </div>

              <div className="modal-icon modal-icon--good">🌱</div>
              <h2 className="modal-title">Quais hábitos quer cultivar?</h2>
              <p className="modal-sub">
                Escolha pelo menos um. Você pode adicionar mais depois no seu painel.
              </p>

              <p className="chips-label">sugestões</p>
              <div className="chips">
                <button type="button" className="chip chip--good">exercitar</button>
                <button type="button" className="chip chip--good">leitura</button>
                <button type="button" className="chip chip--good">meditar</button>
                <button type="button" className="chip chip--good">beber água</button>
                <button type="button" className="chip chip--good">dormir bem</button>
                <button type="button" className="chip chip--good">estudar</button>
                <button type="button" className="chip chip--good">gratidão</button>
                <button type="button" className="chip chip--good">cozinhar</button>
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

            <div className="modal-footer">
              <div className="footer-left">
                <button type="button" className="btn-skip">pular</button>
              </div>
              <button type="button" className="btn-next">ir pro painel →</button>
            </div>

          </div>
        </div>
      )}

    </>
  )
}

export default Body