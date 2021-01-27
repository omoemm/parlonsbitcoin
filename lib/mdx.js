import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';

const root = process.cwd();
const datapath = path.join(root, 'data')

export async function getFiles(type) {
  const dir = path.join(datapath, type)
  return fs.readdirSync(dir)
}

export async function getFileBySlug(slug, type='podcasts') {
  const source = fs.readFileSync(path.join(datapath, type, `${slug}.mdx`))
  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components: {}, // add here the components used in the mdx
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    mdxSource,
    frontMatter: data,
  }
}

export async function getLatestPodcastData() {
  const podcastFiles = await getFiles('podcasts')

  const allPodsData = podcastFiles.map(fileName => {
    const slug = fileName.replace('.mdx', '')
    const source = fs.readFileSync(
      path.join(datapath, 'podcasts', fileName)
    )
    const { data } = matter(source)
    return {
      slug,
      ...data
    }
  })

  const latestPodcast = allPodsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return - 1
    }
  })[0]

  return latestPodcast
}
