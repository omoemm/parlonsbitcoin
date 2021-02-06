const quotesByAuthor = {
  Sénèque: [
    "Être partout à la fois, c'est être nulle part.",
    "Ce n'est pas l'homme qui possède peu qui est pauvre, mais celui qui désire davantage.",
    "Considère pendant un long moment l'idée  d'admettre une personne dans ton amitié. Mais lorsque tu as décidé de le faire, accueille la avec coeur et âme, et parle avec elle sans réserve comme tu le ferais avec toi-même.",
    "Cela me rappelle cette phrase entendue à Pomponius. ‘Certains hommes se sont enfermés dans des coins si sombres que les objets à la lumière du jour leur paraissent flous.’",
    "Les gens devraient admirer notre manière de vivre mais ils devraient en même temps la trouver compréhensible.",
    "Je vois avec plaisir et approuve la manière que tu as de rester à tes études et de sacrifier tout à tes efforts résolus pour faire de toi un homme meilleur chaque jour.",
    "Quiconque pénètre notre foyer, devrait nous admirer nous plutôt que nos meubles.",
    "Une chose que j'ai remarquée avec l'auteur stoïque Hecato. Limiter ses désirs aide à guérir la peur. ‘Cesse d'espérer’, dit-il, ‘et tu cesseras d'avoir peur.’",
    "La peur marche à l'unisson avec l'espoir. Leur relation ne me surprend pas, les deux appartiennent à un esprit en suspens, à un esprit anxieux de son regard vers le futur.",
    "Si la sagesse m'était offerte à la seule condition que je doive la garder pour moi seul et ne la divulguer à quiconque, je la rejetterais.",
    "Il n'y a aucun plaisir à posséder quelque chose de valeur sans avoir quelqu'un avec qui la partager.",
    "Les Hommes apprenent en enseignant.",
    "Tout aussi bonne est la réponse de l'artiste à qui l'on demande pourquoi se donner tout ce trouble: ‘Quelques personnes pour apprécier mon art sont suffisantes pour moi; une personne l'est également; et personne, c'est également suffisant.’",
    "La fin ressemble inévitablement au début: une personne qui démarre une amitié parce que ça lui profite cessera d'être amie lorsque cela ne lui profite plus.",
    "Offir son amitié seulement pour le meilleur mais pas pour le pire, c'est la dépouiller de toute dignité.",
    "L'homme sage (...) ne manque de rien, car manquer de quelque chose signifie que cette chose une nécessite et rien, à l'homme sage, n'est une nécessité.",
    "Non heureux est celui qui le pense de lui-même.",
    "Eh bien nous devrions chérir le vieil âge et le savourer. Il est plein de plaisirs si tu sais comment l'utiliser. Les fruits sont les savoureux à la fin de la saison."
  ],
  "Lao Tzu": [
    "Le sage n'entreprend jamais de grandes choses, ainsi il les accomplit.",
    "La Nature ne se hâte en rien, pourtant tout est accompli.",
  ],
  "Joseph Campbell": [
    `Suis ta voie. Si tu suis ta voie, tu te places sur un chemin qui a toujours été là à t'attendre, et la vie que tu devrais de vivre est celle que tu vis. Lorsque tu es capable de la voir, tu commences à rencontrer des gens qui sont dans le champ de ta voie, et ils ouvrent des portes pour toi. Je dis, suis ta voie et n'aie crainte, les portes s'ouvriront là où tu ne savais pas qu'elles étaient. Si tu suis ta voie, des portes s'ouvriront pour toi qui ne se seraient ouvertes pour nul autre.`
  ],
  Epicure: [
    "Tout homme qui ne pense pas que ce qu'il a est amplement suffisant est un homme malheureux, même s'il est maître du monde.",
  ]
}

const authors = Object.keys(quotesByAuthor)
const quotes = authors.reduce((prev, author) => {
  const currentQuotes = quotesByAuthor[author].map((quote) => ({ quote, author }))
  const next = prev.concat(currentQuotes)
  return next
}, [])

export default quotes