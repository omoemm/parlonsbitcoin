import formatDate from 'lib/date'
import Fetcher from './Fetcher'

function MessagesList({ data: messages }) {
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
  return <Fetcher
    token={token}
    fetchType="message"
    DisplayComponent={MessagesList}
  />
}