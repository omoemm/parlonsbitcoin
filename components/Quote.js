const quotes = [
  "To be everywhere is to be nowhere.",
  "It is not the man who has too little who is poor, but the one who hankers after more.",
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