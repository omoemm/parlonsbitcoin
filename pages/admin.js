import Container from "components/Container";

export async function getServerSideProps(context) {
  const {token} = context.query
  return {
    props: {
      authed: token === process.env.TOKEN
    },
  }
}



export default function Admin({ authed }) {
  if (!authed) {
    return (
      <Container
        noindex={true}
      >
        <div className="text-center my-8 text-lg">
          Those are not the droids you are looking for 🤖🌑
        </div>
      </Container>)
  }


  return (
    <Container
      noindex={true}
    >

    </Container>
  )
}
