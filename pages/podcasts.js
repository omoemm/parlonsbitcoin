import Container from 'components/Container'
import PodcastsLayout from 'layouts/podcasts'
import { getPodcastData } from 'lib/mdx'

export default function Podcasts({ podcasts }) {
  return (
    <Container>
      <PodcastsLayout podcasts={podcasts} />
    </Container>
  )
}

export async function getStaticProps() {
  const podcasts = await getPodcastData()
  return { props: { podcasts } }
}