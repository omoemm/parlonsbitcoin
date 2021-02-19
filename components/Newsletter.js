import React, { useRef } from 'react'
import axios from 'axios'


export default function Newsletter() {
  const inputEl = useRef(null)
  const mathEl = useRef(null)
  const [email, setEmail] = React.useState(null)
  const [form, setForm] = React.useState({ state: 'waitingEmail' })
  const [number1, setNumber1] = React.useState(Math.floor(Math.random() * 11))
  const [number2, setNumber2] = React.useState(Math.floor(Math.random() * 11))


  const storeEmail = async (e) => {
    e.preventDefault()
    setEmail(inputEl.current.value)
    setForm({ state: 'emailStored' })
  }

  const checkArithmetic = async (e) => {
    e.preventDefault()
    const userAnswer = mathEl.current.value

    userAnswer == number1 + number2
      ? postEmail()
      : setForm({
        state: 'error',
        message: `${userAnswer} est une réponse incorrecte à ${number1} + ${number2} ?`
      })
  }

  const postEmail = async () => {
    await axios({
      method: "POST",
      url: "https://api.onearth.be/v1/parlonsbitcoin/mailing",
      data: {
        email: email,
        token: process.env.TOKEN,
      }
    })
      .then((response) => {
        if (response.status === 201) {
          setForm({ state: "success" })
        }
        else {
          setForm({
            state: "error",
            message: `erreur ${response.status}`
          })
        }
      })
      .catch(error => {
        setForm({
          state: "error",
          message: error.message,
        })
      })
  }


  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto my-8">
      <div className="font-bold text-lg md:text-xl tracking-tight px-6 py-4 self-center w-full">Ne manque aucun épisode, abonne-toi 🚀
      </div>
      {form.state === "waitingEmail" && (
        <form className="relative my-2 shadow-md w-full" onSubmit={storeEmail}>
          <input
            ref={inputEl}
            placeholder="satoshi@nakamoto.com"
            type="email"
            autoComplete="email"
            required
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <button
            className="flex items-center justify-center absolute right-1 top-2 px-4 font-bold h-8 bg-gray-100 text-gray-900 rounded w-28"
            type="submit"
          >
            S'abonner
        </button>
        </form>
      )}
      {form.state === "emailStored" && (
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
      )}
      {form.state === "error" && (
        <div className="flex flex-col justify-center items-center space-y-4">
          <p className='text-red-500'>{`${form.message}`}</p>
          <button
            className="bg-white shadow-md px-2 py-2 font-bold border text-gray-900 rounded"
            onClick={() => setForm({ state: 'waitingEmail' })}
          >
            Recommencer 🔃
        </button>
        </div>
      )}
      {form.state === "success" && (
        <p><em>{email}</em> correctement enregistré 🌟🤩</p>
      )}
    </div>
  );
}