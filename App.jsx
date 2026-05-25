import { Routes, Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Form />} />
    </Routes>
  )
}

export default App
