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