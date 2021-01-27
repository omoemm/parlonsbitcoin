import { getFiles, getFileBySlug } from 'lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import PodcastLayout from 'layouts/podcast'

export default function Podcast({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {})
  return <PodcastLayout frontMatter={frontMatter}>{content}</PodcastLayout>
}

export async function getStaticPaths() {
  const podcasts = await getFiles('podcasts')
  return {
    paths: podcasts.map(p => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const podcast = await getFileBySlug(params.slug)
  return { props: podcast }
}