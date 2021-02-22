import React from 'react'
import quotes from 'data/quotes'


export default function Quote() {
  const [quoteIndex, setQuoteIndex] = React.useState(Math.floor(Math.random() * quotes.length))
  const storedQuotes = React.useRef(quotes)
  const { quote, author } = storedQuotes.current[quoteIndex]
  const incrementIndex = () => {
    const nextIndex = quoteIndex + 1
    setQuoteIndex(nextIndex === storedQuotes.current.length ? 0 : nextIndex)
  }

  return (
    <div className="my-8 flex flex-col items-center bg-gray-100 max-w-md mx-auto py-4 px-6 rounded-lg">
      <div className="prose prose-sm md:prose-lg text-justify text-gray-600 max-w-md tracking-tight">
        <em>{quote}</em><br />
        <em>– {author}</em><br />
        {/* faire bouton avec hover text pour refresh */}
      </div>
      <button
        onClick={incrementIndex}>
        💫
      </button>
    </div>
  )
}