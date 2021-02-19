import React, { useRef } from 'react'
import axios from 'axios'
import Arithmetic from 'components/Arithmetic'


export default function Newsletter() {
  const inputEl = React.useRef(null)
  const [email, setEmail] = React.useState(null)
  const [form, setForm] = React.useState({ state: 'waitingEmail' })


  const storeEmail = async (e) => {
    e.preventDefault()
    setEmail(inputEl.current.value)
    setForm({ state: 'emailStored' })
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
        <Arithmetic
          postMethod={postEmail}
          setForm={setForm}
        />
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