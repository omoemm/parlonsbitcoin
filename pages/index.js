import Container from '../components/Container'


export default function Home() {
  return (
    <Container>
      <h1>Dernier épisode</h1>
      <iframe height="200px" width="75%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/d91a1288-3a1a-4c3d-863e-2b18d079fc9a?dark=false"></iframe>
    </Container>
  )
}
