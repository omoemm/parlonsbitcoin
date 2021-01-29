import { reversedQuotes } from 'data/quotes'


function get_random(list) {
  return list[Math.floor(Math.random() * list.length)]
}

export default function getRandomQuote() {
  const randomAuthorByQuote = get_random(reversedQuotes)
  const key = Object.keys(randomAuthorByQuote)[0]
  return { quote: key, author: randomAuthorByQuote[key] }
}