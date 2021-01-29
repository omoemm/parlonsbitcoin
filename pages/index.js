import Container from 'components/Container'
import PodcastPlayer from 'components/PodcastPlayer'
import Quote from 'components/Quote'
import { getLatestPodcastData } from 'lib/mdx';
import NextLink from 'next/link'


function PodFrame({ podcast }) {
  const { simplelink, slug } = podcast
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl mx-auto mb-8">
      <PodcastPlayer simplelink={simplelink} />
      <NextLink href={`/podcasts/${slug}`}>
        <a className="my-5">
          Détails du podcast
        </a>
      </NextLink>
    </div>
  )
}

export default function Home({ latestPodcast }) {
  return (
    <Container>
      <PodFrame podcast={latestPodcast} />
      <Quote />
    </Container>
  )
}

export async function getStaticProps() {
  const latestPodcast = await getLatestPodcastData('podcasts')

  return { props: { latestPodcast } }
}
