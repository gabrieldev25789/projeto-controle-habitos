// Home.jsx
import { useState } from "react"
import Header from "../Header/Header"
import Body from "../Body/Body"
import Modal from "../Modal/Modal"

function Home() {
  const [showModal, setShowModal] = useState(true)

  return (
    <>
      <Header />
      {showModal && <Modal onFinish={() => setShowModal(false)} />}
      <Body />
    </>
  )
}

export default Home