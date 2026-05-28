import { useState } from "react"
import "./Body.css"

const DAYS_LABEL = ["D", "S", "T", "Q", "Q", "S", "S"]

function HabitCalendar({ name, type }) {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const today = now.getDate()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()
  const monthName = now.toLocaleString("pt-BR", { month: "long", year: "numeric" })

  const [marked, setMarked] = useState({})

  function toggleDay(day) {
    if (day > today) return
    setMarked(prev => ({ ...prev, [day]: !prev[day] }))
  }

  const blanks = Array(firstDay).fill(null)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className={`card card--${type}`}>
      <div className="card-header">
        <span className="habit-name">{name}</span>
        <span className="month-label">{monthName}</span>
      </div>

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
                day > today
                  ? "cal-day--future"
                  : `cal-day--${type}-${marked[day] ? "on" : "off"}`,
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
  return (
    <div className="body-wrap">

      {habitosSelecionados.length > 0 && (
        <div className="section-label section-label--good">
          🌱 hábitos bons
        </div>
      )}
      {habitosSelecionados.map(h => (
        <HabitCalendar key={h} name={h} type="good" />
      ))}

      {viciosSelecionados.length > 0 && (
        <div className="section-label section-label--bad">
          🔥 vícios
        </div>
      )}
      {viciosSelecionados.map(v => (
        <HabitCalendar key={v} name={v} type="bad" />
      ))}

    </div>
  )
}

export default Body