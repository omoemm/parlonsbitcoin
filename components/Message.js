import React from 'react'
import { fetchAll } from 'lib/api'
import formatDate from 'lib/date'

function MessagesList({ messages }) {
  return (
    <div className="flex flex-col max-w-2xl items-center mx-auto my-8">
      <ul className="space-y-5">
        {messages.map((msg) => {
          const { read, _id, message, createdAt } = msg
          return (
            <li key={_id} className="">
              <div>
              {formatDate(createdAt)}
              </div>
              <div className="prose prose-md">
                {message}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default function Message({ token }) {
  const [messages, setMessages] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const fetchMessages = async () => {
    fetchAll("message", token)
      .then(
        (response) => {
          setMessages(response.data.data.data)
          setLoading(false)
        })
      .catch((response) => {
        setError(response.response)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    fetchMessages()
  }, [])

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  if (loading) {
    return <div className="flex mx-auto max-w-2xl my-8">loading...</div>
  }

  return <MessagesList messages={messages} />
}