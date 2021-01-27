import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const root = process.cwd();
const datapath = path.join(root, 'data')

export async function getFiles(type) {
  const dir = path.join(datapath, type)
  return fs.readdirSync(dir)
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
