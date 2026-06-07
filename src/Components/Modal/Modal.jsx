 import { useState } from "react"
import "./Modal.css"

 const HABITS = {
  bad: [ 
  { label: "redes sociais", val: "redes sociais" },
  { label: "fumar",         val: "fumar" },
  { label: "álcool",        val: "álcool" },
  { label: "procrastinar",  val: "procrastinar" },
  { label: "junk food",     val: "junk-food" },
  { label: "pornografia",   val: "pornografia" }
  ],

  good: [ 
  { label: "exercitar",     val: "exercitar" },
  { label: "leitura",       val: "leitura" },
  { label: "meditar",       val: "meditar" },
  { label: "estudar",       val: "estudar" }
  ]
}

function Modal({ setModalAberto }){
  const [habitosSelecionados, setHabitosSelecionados] = useState([])
  const [passo2, setPasso2] = useState(false)

  function continuar(){
    setPasso2(true)
  }

  function irPainel(){
    setModalAberto(false)
  }

  function toggleHabito(val){
    setHabitosSelecionados(prev => 
      prev.includes(val) ? prev.filter(h => h !== val) : [...prev, val]
    )
  } 
    
return (
  <>
    {!passo2 &&
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
              {HABITS.bad.map((bad)=>(

              <button 
                  key={bad.val} 
                  type="button" 
                  className={`chip chip--bad ${habitosSelecionados.includes(bad.val) ? "chip--selected" : ""}`}
                  onClick={() => toggleHabito(bad.val)}
                  >
                  {habitosSelecionados.includes(bad.val) && <span className="chip-check">✓</span>}
                  {bad.label}
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
              <button type="button" className="btn-skip">pular</button>
            </div>
            <button type="button" className="btn-next" onClick={() => continuar()}>continuar →</button>
          </div>

        </div>
      </div>
    }

    {passo2 &&
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
              {HABITS.good.map((good)=>(

                <button 
                  key={good.val} 
                  type="button" 
                  className={`chip chip--good ${habitosSelecionados.includes(good.val) ? "chip--selected" : ""}`}
                  onClick={() => toggleHabito(good.val)}
                  >
                  {habitosSelecionados.includes(good.val) && <span className="chip-check">✓</span>}
                  {good.label}
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
              <button type="button" className="btn-skip">pular</button>
            </div>
            <button type="button" className="btn-next" onClick={() => irPainel()}>ir pro painel →</button>
          </div>

        </div>
      </div>
    }
  </>
)
}



export default Modal