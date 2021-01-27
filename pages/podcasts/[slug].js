import { getFiles } from '../../lib/mdx'

export default function Podcast(podcast) {
  return (
    <h1>in progress {podcast.slug}</h1>
  )
}

export async function getStaticPaths() {
  const podcasts = await getFiles('podcasts')
  return {
    paths: podcasts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // TODO find a way to convert a slug to a markdown content
  // eg. params.slug = 'slug-2'
  // now pass the content to the Podcast
  // which itself may separate concerns by letting another
  // component handle the layout
  const podcast = params
  return { props: podcast }
}