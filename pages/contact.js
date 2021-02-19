import React from 'react'
import Container from 'components/Container'
import Arithmetic from 'components/Arithmetic'
import axios from 'axios'


export default function Contact() {
  const inputEl = React.useRef(null)
  const [form, setForm] = React.useState({ state: 'notVerified' })

  const postMessage = async () => {
    await axios({
      method: "POST",
      url: "https://api.onearth.be/v1/parlonsbitcoin/message",
      data: {
        message: inputEl.current.value,
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
    <Container>
      <div className="flex flex-col justify-center items-center my-8 max-w-2xl mx-auto">
        {form.state === "notVerified" &&
          <div className=" w-full my-2 max-w-lg">
            <textarea
              ref={inputEl}
              placeholder="Laisse moi ton contact si tu veux que je puisse te répondre 📝 "
              required
              className="shadow-md px-4 py-2 w-full rounded-md bg-white text-gray-900 resize-y h-56"
            />
            <Arithmetic postMethod={postMessage} setForm={setForm} />
          </div>
        }
        {form.state === "error" && (
          <div className="flex flex-col justify-center items-center space-y-4">
            <p className='text-red-500'>{`${form.message}`}</p>
            <button
              className="bg-white shadow-md px-2 py-2 font-bold border text-gray-900 rounded"
              onClick={() => setForm({ state: 'notVerified' })}
            >
              Recommencer 🔃
        </button>
          </div>
        )}
        {form.state === "success" &&
          <div className="flex flex-col justify-center items-center my-8 max-w-2xl mx-auto">
            <p>Message correctement enregistré 🌟🤩</p>
          </div>
        }
      </div>
    </Container>
  )
}