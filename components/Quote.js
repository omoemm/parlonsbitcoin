import React, { useEffect } from 'react'
import quotes from 'data/quotes'


export default function Quote() {
  const [quoteIndex, setQuoteIndex] = React.useState(Math.floor(Math.random() * quotes.length))
  const { quote, author } = quotes[quoteIndex]

  return (
    <div>
      <hr className="max-w-xs mx-auto my-5" />
      <div className="prose prose-md mx-auto text-gray-600 max-w-md">
        <em>{quote}</em> <br />
        <em>– {author}</em>
      </div>
      <hr className="max-w-xs mx-auto my-5" />
    </div>
  )
}