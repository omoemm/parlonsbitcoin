import React from 'react'
import Fetcher from './Fetcher'


function EmailsToCopy({ data: emails }) {
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


export default function Message({ token }) {
  return <Fetcher
    token={token}
    fetchType="mailing"
    DisplayComponent={EmailsToCopy}
  />
}