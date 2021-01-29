import getRandomQuote from 'lib/quote'


export default function Quote() {
  const {quote, author} = getRandomQuote()
  return (
    <div>
      <hr className="max-w-xl mx-auto my-8"/>
      <div className="prose prose-md mx-auto text-gray-600">
        <em>{quote}</em> <br />
        <em className="text-right">– {author}</em>
      </div>
      <hr className="max-w-xl mx-auto my-8"/>
    </div>
  )
}