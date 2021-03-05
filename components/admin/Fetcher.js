import React from 'react'
import { fetchAll } from 'lib/api'


export default function Fetcher({ token, fetchType, DisplayComponent }) {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const fetchData = async () => {
    fetchAll(fetchType, token)
      .then(
        (response) => {
          setData(response.data.data.data)
          setLoading(false)
        })
      .catch((response) => {
        setError(response.response)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  if (loading) {
    return <div className="flex mx-auto max-w-2xl my-8">loading...</div>
  }

  return <DisplayComponent data={data} />
}