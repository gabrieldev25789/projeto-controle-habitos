// Home.jsx
import { useState } from "react"
import Header from "../Header/Header"
import Body from "../Body/Body"

function Home() {
  const [showModal, setShowModal] = useState(true)

  return (
    <>
      <Header />
      {showModal && <Body onFinish={() => setShowModal(false)} />}
      <div>Home</div>
    </>
  )
}

export default Home