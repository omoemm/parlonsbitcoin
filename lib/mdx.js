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
  const allPodcastData = await getPodcastData()
  return allPodcastData[0]
}


function getMatter(fileName) {
  const source = fs.readFileSync(
    path.join(datapath, 'podcasts', fileName)
  )
  return matter(source)
}


export async function getPodcastData() {
  const podcastFiles = await getFiles('podcasts')

  const allPodsData = podcastFiles.map(fileName => {
    const slug = fileName.replace('.mdx', '')
    const { data } = getMatter(fileName)

    return {
      slug,
      ...data
    }
  })

  const sortedPodcastData = allPodsData.sort((a, b) =>  a.date < b.date ? 1 : 1)

  return sortedPodcastData
}

