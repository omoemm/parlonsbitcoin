const quotes = [
  "To be everywhere is to be nowhere.",
  "It is not the man who has too little who is poor, but the one who hankers after more.",
  "Think for a long time whether or not you should admit a given person to your friendship. But when you have decided to do so, welcome him heart and soul, and speak as unreservedly with him as you would with yourself.",
]

export default function Quote() {
  const author = "Seneca"
  const quote = "To be everywhere is to be nowhere."
  return (
    <>
      <hr/>
      <p>{quote}</p>
      <p>-- {author}</p>
      <hr/>
    </>
  )
}