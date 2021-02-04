import Container from 'components/Container'
import PodcastPlayer from 'components/PodcastPlayer'
import Newsletter from 'components/Newsletter'
import Quote from 'components/Quote'
import { getLatestPodcastData } from 'lib/mdx';
import NextLink from 'next/link'


function PodFrame({ podcast }) {
  const { simplelink, slug } = podcast
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl w-full mx-auto mb-4">
      <PodcastPlayer simplelink={simplelink} />
      <NextLink href={`/podcasts/${slug}`}>
        <a className="hover:shadow text-sm md:text-base my-3 border border-gray-200 rounded px-8 py-4">
          📝 Plus de détails sur ce podcast
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
      <Newsletter />
    </Container>
  )
}

export async function getStaticProps() {
  const latestPodcast = await getLatestPodcastData('podcasts')

  return { props: { latestPodcast } }
}
