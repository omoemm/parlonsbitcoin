const quotes = {
  Seneca: [
    "To be everywhere is to be nowhere.",
    "It is not the man who has too little who is poor, but the one who hankers after more.",
    "Think for a long time whether or not you should admit a given person to your friendship. But when you have decided to do so, welcome him heart and soul, and speak as unreservedly with him as you would with yourself.",
    "This prompts me to memorize something which I came across in Pomponius. ‘Some men have shrunk so far into dark corners that objects in bright daylight seem quite blurred to them.’",
    "People should admire our way of life but they should at the same time find it understandable.",
    "I view with pleasure and approval the way you keep on at your studies and sacrifice everything to your single-minded efforts to make yourself every day a better man.",
    "Anyone entering our homes should admire us rather than our furnishings.",
    "Something that I noticed in the Stoic writer Hecato. Limiting one’s desires actually helps to cure one of fear. ‘Cease to hope,’ he says, ‘and you will cease to fear.’",
    "Fear keeps pace with hope. Nor does their so moving together surprise me; both belong to a mind in suspense, to a mind in a state of anxiety through looking into the future.",
    "If wisdom were offered me on the one condition that I should keep it shut away and not divulge it to anyone, I should reject it.",
    "There is no enjoying the possession of anything valuable unless one has someone to share it with.",
    "Men learn as they teach.",
    "Equally good is the answer given by the person, whoever it was (his identity is uncertain), who when asked what was the object of all the trouble he took over a piece of craftsmanship when it would never reach more than a very few people, replied: ‘A few is enough for me; so is one; and so is none.’"
  ],
  "Lao Tzu": [
    "The sage never attemps great things and thus accomplish them.",
    "Nature never hurry, yet everything is accomplished."
  ],
  "Joseph Campbell": [
    `Follow your bliss.
    If you do follow your bliss,
    you put yourself on a kind of track
    that has been there all the while waiting for you,
    and the life you ought to be living
    is the one you are living.
    When you can see that,
    you begin to meet people
    who are in the field of your bliss,
    and they open the doors to you.
    I say, follow your bliss and don't be afraid,
    and doors will open
    where you didn't know they were going to be.
    If you follow your bliss,
    doors will open for you that wouldn't have opened for anyone else.`
  ]
}

const authors = Object.keys(quotes)

export const reversedQuotes = authors.reduce((prev, author) => {
  const authorByQuotes = quotes[author].map((q) => ({ [q]: author }))
  const next = prev.concat(authorByQuotes)
  return next
}, [])