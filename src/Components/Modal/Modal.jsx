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

function Modal(){
  console.log(HABITS)
return (
    <>
     <h2>modal</h2>
    </>
  )
}

export default Modal