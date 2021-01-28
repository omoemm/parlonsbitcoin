import NextLink from 'next/link'

function Card({ podcast }) {
  return (
    <div className="w-full shadow-lg cursor-pointer bg-white sm:rounded-2xl sm:p-2.5">
      <NextLink href={`/podcasts/${podcast.slug}`}>
        <div className="flex flex-col items-center">
          <div class="relative ">
            <img className="rounded-md" alt='podcast-tile' src={podcast.image} />
            <p className="text-gray-800 mt-1 text-lg">{podcast.title}</p>
          </div>
        </div>
      </NextLink>
    </div>
  )
}



export default function PodcastLayout({ podcasts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl gap-6 mx-auto">
      {podcasts.map((podcast) => (
        <Card
          key={podcast.slug}
          podcast={podcast}
        />
      ))}
    </div>
  )
}