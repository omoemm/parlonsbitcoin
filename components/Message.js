import React from 'react'
import { get } from 'lib/api'


export default function Message() {
  const [messages, setMessages] = React.useState(null)
  const [error, setError] = React.useState(null)

  const getMessages = () => {
    get("message")
      .then(
        (response) => {
          setMessages(response.data.data.data)
        })
      .catch((response) => {
        setError(response.response)
      })
  }

  getMessages()

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return <div>{JSON.stringify(messages)}</div>
}