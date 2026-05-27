import { useState } from "react"
import "./Body.css"

const DAYS = 14

function HabitItem({ name, type }) {
  const [marked, setMarked] = useState(Array(DAYS).fill(false))

  function toggleDay(i) {
    setMarked(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  return (
    <div className="habit-item">
      <span className="habit-name">{name}</span>
      <div className="days">
        {marked.map((filled, i) => (
          <div
            key={i}
            className={`day day--${type}-${filled ? "filled" : "empty"}`}
            title={`dia ${i + 1}`}
            onClick={() => toggleDay(i)}
          />
        ))}
      </div>
    </div>
  )
}

function Body({ habitosSelecionados = [], viciosSelecionados = [] }) {
  return (
    <div className="body-grid">

      <div className="card card--good">
        <div className="card-header">
          <div className="card-icon card-icon--good">🌱</div>
          <span className="card-title card-title--good">hábitos bons</span>
        </div>
        {habitosSelecionados.map((h, i) => (
          <div key={h}>
            {i > 0 && <div className="divider" />}
            <HabitItem name={h} type="good" />
          </div>
        ))}
      </div>

      <div className="card card--bad">
        <div className="card-header">
          <div className="card-icon card-icon--bad">🔥</div>
          <span className="card-title card-title--bad">vícios</span>
        </div>
        {viciosSelecionados.map((v, i) => (
          <div key={v}>
            {i > 0 && <div className="divider" />}
            <HabitItem name={v} type="bad" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Body