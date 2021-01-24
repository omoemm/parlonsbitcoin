import Container from '../components/Container'


export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1>Dernier épisode</h1>
      <iframe height="200px" width="75%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/d91a1288-3a1a-4c3d-863e-2b18d079fc9a?dark=false"></iframe>
      </div>
    </Container>
  )
}
