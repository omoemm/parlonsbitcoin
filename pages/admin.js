import Container from "components/Container";
import React from 'react'


export async function getServerSideProps(context) {
  const {token} = context.query
  return {
    props: {
      authed: token === process.env.TOKEN
    },
  }
}


function Mailing() {
  return ("mail")
}

function Message() {
  return ("message")
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

  const [state, setState] = React.useState(null)

  return (
    <Container
      noindex={true}
    >
      <div className="flex flex-row justify-center space-x-4 my-8">
        <button onClick={() => setState("mailing")}>💌</button>
        <button onClick={() => setState("message")}>📮</button>
      </div>

    {state === "mailing" && <Mailing/>}
    {state === "message" && <Message/>}

    </Container>
  )
}
