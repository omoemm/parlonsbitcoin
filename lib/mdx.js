import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const root = process.cwd();
const podsDirectory = path.join(root, 'data', 'podcasts')

export async function getLatestPodcastData() {
  const fileNames = fs.readdirSync(podsDirectory)

  const allPodsData = fileNames.map(fileName => {
    const slug = fileName.replace('.mdx', '')
    const source = fs.readFileSync(
      path.join(podsDirectory, fileName)
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
