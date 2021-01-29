const quotes = {
  Sénèque: [
    "Être partout à la fois, c'est être nulle part.",
    "Ce n'est pas l'homme qui a peu qui est pauvre, mais celui qui en veut davantage.",
    "Considère pendant un long moment l'idée  d'admettre une personne dans ton amitié. Mais lorsque tu as décidé de le faire, accueille la avec coeur et âme, et parle avec elle sans réserve comme tu le ferais avec toi-même.",
    "Cela me rappèle quelque chose que j'ai entendu à Pomponius. ‘Certains hommes se sont tant enfermés dans des coins sombres que les objets à la lumière du jour leur paraissent assez flous.’",
    "Les gens devraient admirer notre manière de vivre mais ils devraient en même temps la trouver compréhensible.",
    "Je vois avec plaisir et approuve la manière que tu as de rester à tes études et de sacrifier tout à tes efforts résolus pour faire de toi chaque jour un homme meilleur.",
    "Quiconque pénètre notre foyer, devrait nous admirer nous plutôt que nos meubles.",
    // TODO translate the rest
    "Something that I noticed in the Stoic writer Hecato. Limiting one’s desires actually helps to cure one of fear. ‘Cease to hope,’ he says, ‘and you will cease to fear.’",
    "Fear keeps pace with hope. Nor does their so moving together surprise me; both belong to a mind in suspense, to a mind in a state of anxiety through looking into the future.",
    "If wisdom were offered me on the one condition that I should keep it shut away and not divulge it to anyone, I should reject it.",
    "There is no enjoying the possession of anything valuable unless one has someone to share it with.",
    "Men learn as they teach.",
    "Equally good is the answer given by the person, whoever it was (his identity is uncertain), who when asked what was the object of all the trouble he took over a piece of craftsmanship when it would never reach more than a very few people, replied: ‘A few is enough for me; so is one; and so is none.’",
    "The many speak highly of you, but have you really any grounds for satisfaction with yourself if you are the kind of person the many understand? Your merits should not be outward facing.",
    "I’m still turning over the pages of Epicurus, and the following saying, one I read today, comes from him: ‘To win true freedom you must be a slave to philosophy.’ A person who surrenders and subjects himself to her doesn’t have his application deferred from day to day; he’s emancipated on the spot, the very service of philosophy being freedom.",
    "The ending inevitably matches the beginning: a person who starts being friends with you because it pays him will similarly cease to be friends because it pays him to do so.",
    "To procure friendship only for better and not for worse is to rob it of all its dignity.",
    "The wise man needs hands and eyes and a great number of things that are required for the purposes of day-to-day life; but he lacks nothing, for lacking something implies that it is a necessity and nothing, to the wise man, is a necessity.",
  ],
  "Lao Tzu": [
    "Le sage n'entreprend jamais de grandes choses, ainsi il les accomplit.",
    "La Nature ne se hâte en rien, pourtant tout est accompli.",
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