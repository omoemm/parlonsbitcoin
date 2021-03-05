import React from 'react'
import { fetchAll } from 'lib/api'


function EmailsToCopy({ emails }) {
  const adresses = emails.map(({ email }) => email)

  return (
    <div className="flex flex-col max-w-2xl items-center mx-auto my-8 space-y-4">
      <div className="text-gray-600 text-sm">Abonné.e.s {emails.length}</div>
      <div className="text-red-600">⚠ BCC - compte jusqu'à 3 ⚠</div>
      <div className="max-w-2xl break-words">
        {adresses.join(";")}
      </div>
    </div>
  )
}


export default function Mailing({ token }) {
  const [emails, setEmails] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const fetchEmails = async () => {
    fetchAll("mailing", token)
      .then(
        (response) => {
          setEmails(response.data.data.data)
          setLoading(false)
        })
      .catch((response) => {
        setError(response.response)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    fetchEmails()
  }, [])

  if (loading) {
    return <div className="flex mx-auto max-w-2xl my-8">loading...</div>
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return <EmailsToCopy emails={emails} />
}
