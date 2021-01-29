import getRandomQuote from 'lib/quote'


export default function Quote() {
  const {quote, author} = getRandomQuote()
  return (
    <div>
      <hr className="max-w-xs mx-auto my-5"/>
      <div className="prose prose-md mx-auto text-gray-600 max-w-md">
        <em>{quote}</em> <br />
        <em>– {author}</em>
      </div>
      <hr className="max-w-xs mx-auto my-5"/>
    </div>
  )
}