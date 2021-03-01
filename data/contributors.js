const pod2 = [
  "Seb",
  "Antoine T.",
  "Sun",
  "Loic",
  "David M.",
  "Marin",
  "Nicolas L.",
  "Nectarios",
  "Kevin",
  "David St.",
  "Ky",
  "Antoine B.",
  "Maman",
  "Flo",
  "Eric",
  "Cécile",
  "Jacques",
  "Flavie",
  "Damien",
  "Julien",
  "Sonia",
  "Wen Da",
  "Pierre",
]

const pod1 = [
  "Ammar",
  "David M.",
  "Estelle",
  "Flip'",
  "Mathieu",
  "Nicolas L.",
  "Tim",
  "Marin",
  "Flo",
  "Simon",
  "Ky",
  "Sun",
  "Nazar",
  "Markos",
  "Rama",
  "Alexis",
  "Todd",
  "Victor M.",
  "Antoine T.",
  "Eric",
  "Brice",
  "Maman",
  "Ariane",
  "Nicolas D. 🐳",
  "Julien",
  "Seb",
  "Flavie",
  "Samuel",
  "Kevin",
  "Victor B.",
  "Pierre",
]

const launch = [
  "Seb",
  "Pierre",
  "Flavie",
  "Kevin",
  "Ariane",
  "Melina",
]

const namesByPodcasts = [pod1, pod2, launch]
const allNames = namesByPodcasts.reduce((previous, names) => previous.concat(names), [])
const uniqueNames = allNames.reduce((previous, name) => {
  if (!previous.includes(name)) {
    previous.push(name)
  }
  return previous
}, []).sort((a, b) => {
  const sortCriteria = a > b ? 1 : -1
  return sortCriteria
})

const contributors = uniqueNames.map((name) => ({name, count: allNames.filter(x => x === name).length}))

export default contributors