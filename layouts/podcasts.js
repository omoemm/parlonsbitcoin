import React from 'react'
import NextLink from 'next/link'

function Card({ podcast }) {
  const [isDescriptionShown, setIsDescriptionShown] = React.useState(false)

  return (
    <div
    onMouseEnter={() => setIsDescriptionShown(true)}
    onMouseLeave={() => setIsDescriptionShown(false)}
    className="w-full shadow-lg  cursor-pointer  bg-white rounded-lg sm:rounded-2xl p-1 sm:p-2.5 hover:shadow-md">
      <NextLink href={`/podcasts/${podcast.slug}`}>
        <div className="flex flex-col  items-center">
          <img className="rounded-md" alt='podcast-tile' src={podcast.image} />
          {isDescriptionShown &&
            <div className="absolute italic p-5 inline-block my-32 max-w-xs text-center bg-gray-100 bg-opacity-95 rounded-md">{podcast.description}</div>
          }
          <p className="text-gray-600 mt-1 text-lg font-semibold p-2 text-center my-auto">{podcast.title}</p>
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