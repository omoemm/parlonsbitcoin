import React from 'react'

export default function Arithmetic({postMethod, setForm}) {
  const mathEl = React.useRef(null)
  const number1 = Math.floor(Math.random() * 11)
  const number2 = Math.floor(Math.random() * 11)

  const checkArithmetic = async (e) => {
    e.preventDefault()
    const userAnswer = mathEl.current.value

    userAnswer == number1 + number2
      ? postMethod()
      : setForm({
        state: 'error',
        message: `${userAnswer} est une réponse incorrecte à ${number1} + ${number2} ?`
      })
  }

  return (
    <form className="flex flex-row justify-center my-2 w-full space-x-4" onSubmit={checkArithmetic}>
      <input
        ref={mathEl}
        placeholder={`Que vaut ${number1} + ${number2} ?`}
        type="number"
        autoComplete="number"
        required
        className="shadow-sm px-4 py-2 rounded-md bg-white text-gray-900"
      />
      <button
        className="bg-white shadow-md px-2 py-2 font-bold border text-gray-900 rounded"
      >Soumettre 🧮</button>
    </form>
  )
}