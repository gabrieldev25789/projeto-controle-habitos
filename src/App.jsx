import "./App.css"
import { Routes, Route } from "react-router-dom"
import  Form  from "./Components/Form/Form.jsx"
import Home from "./Components/Home/Home.jsx"


function App() {
   return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  )
}

export default App
