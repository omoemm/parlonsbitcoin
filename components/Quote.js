import React, { useEffect } from 'react'
import quotes from 'data/quotes'


export default function Quote() {
  const [quoteIndex, setQuoteIndex] = React.useState(Math.floor(Math.random() * quotes.length))
  const { quote, author } = quotes[quoteIndex]

  return (
    <div className="my-8">
      <div className="prose prose-lg mx-auto w-full text-gray-600 max-w-md my-2">
        <em>{quote}</em> <br />
        <em>– {author}</em>
      </div>
    </div>
  )
}