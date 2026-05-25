import { Routes, Route } from 'react-router-dom'
import Form from './Components/Form/Form'
import Home from './Components/Home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/cadastro" element={<Home />} />
    </Routes>
  )
}

export default App
