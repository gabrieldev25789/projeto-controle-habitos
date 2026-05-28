import { useState } from "react"
import "./body.css"

const DAYS_LABEL = ["D", "S", "T", "Q", "Q", "S", "S"]

function HabitCalendar({ name, type }) {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const today = now.getDate()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()

  const [marked, setMarked] = useState({})

  function toggleDay(day) {
    setMarked(prev => ({ ...prev, [day]: !prev[day] }))
  }

  const blanks = Array(firstDay).fill(null)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="habit-row">
      <span className="habit-name">{name}</span>

      <div className="cal">
        <div className="cal-header">
          {DAYS_LABEL.map((l, i) => (
            <span key={i} className="cal-label">{l}</span>
          ))}
        </div>

        <div className="cal-grid">
          {blanks.map((_, i) => (
            <div key={`b-${i}`} className="cal-day cal-day--empty" />
          ))}
          {days.map(day => (
            <div
              key={day}
              className={[
                "cal-day",
                `cal-day--${type}-${marked[day] ? "on" : "off"}`,
                day === today ? "cal-day--today" : ""
              ].join(" ")}
              onClick={() => toggleDay(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Body({ habitosSelecionados = [], viciosSelecionados = [] }) {
  const monthName = new Date().toLocaleString("pt-BR", { month: "long", year: "numeric" })

  return (
    <div className="body-wrap">

      <div className="card card--good">
        <div className="card-header">
          <div className="card-icon card-icon--good">🌱</div>
          <span className="card-title card-title--good">hábitos bons</span>
          <span className="month-label">{monthName}</span>
        </div>
        <div className="habit-block">
          {habitosSelecionados.map((h, i) => (
            <div key={h}>
              {i > 0 && <div className="divider" />}
              <HabitCalendar name={h} type="good" />
            </div>
          ))}
        </div>
      </div>

      <div className="card card--bad">
        <div className="card-header">
          <div className="card-icon card-icon--bad">🔥</div>
          <span className="card-title card-title--bad">vícios</span>
          <span className="month-label">{monthName}</span>
        </div>
        <div className="habit-block">
          {viciosSelecionados.map((v, i) => (
            <div key={v}>
              {i > 0 && <div className="divider" />}
              <HabitCalendar name={v} type="bad" />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Body