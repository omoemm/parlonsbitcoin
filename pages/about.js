import Container from 'components/Container'

function MyP({ children }) {
  return (<p className="text-gray-800  mb-3">
    {children}
  </p>
  )
}

export default function About() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto mb-6">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight text-black mb-4">
          Parlons Bitcoin, Brisons le Mythe
        </h1>
        <MyP>
          Le cours du Bitcoin monte et descend.
        </MyP>
        <MyP>
          Pourquoi?
        </MyP>
        <MyP>
          Qu'est-ce que le Bitcoin?
        </MyP>
        <MyP>
          <b className="tracking-tight">Parlons Bitcoin</b>, brisons le mythe. Le podcast francophone qui t'aide à parler Bitcoin et à démystifier cette nouvelle technologie, un pas à la fois
        </MyP>
        <h2 className="font-bold text-lg md:text-3xl tracking-tight my-4">
          Qui suis-je?
        </h2>
        <div>
          <MyP>
            Je m'appelle Emmanuel 👋
          </MyP>
          <MyP>
            C'est en 2017 que je découvre l'existence du Bitcoin. Je me souviens être en route vers un match de hockey avec un ami qui me dit qu'il a des bitcoins dans son pc.
          </MyP>
          <p className="mb-3 italic text-gray-700">
            Ils sont où tes bitcoins? Ils sont dans ton laptop? Ils sont dans la blockchain?
          </p>
          <MyP>
            J'ai rien compris à ses explications. Donc j'ai simplement commencé à chercher par moi-même. Depuis, je me suis jamais vraiment arrêté. C'est après avoir passé des milliers d'heures à me renseigner que j'ai décidé de lancer <b className="tracking-tight">Parlons Bitcoin</b>.
          </MyP>
          <MyP>
            Dans la vie, je suis ingénieur électrique de formation et je code au quotidien. Je prends des douches froides, je médite et je prends soin de ma forme.
          </MyP>
          <MyP>
            Je pense que tous les humains sont magnifiques. La seule chose qui nous empêche de kiffer la vie c'est qu'on ne prend pas le temps de regarder ce qu'on est vraiment.
          </MyP>
          <img className="my-2" alt='me-on-a-lake' src='/static/images/the-eyes.jpg' />
          <MyP>
            Laisse-moi un message ou contacte moi sur Twitter, ça me fera plaisir de discuter avec toi 😎
          </MyP>
        </div>
      </div>
    </Container>
  )
}