import React from 'react'
import NextLink from 'next/link'

function Card({ podcast }) {
  return (
    <div
      className="w-full shadow-lg  mb-8 cursor-pointer  bg-white rounded-lg sm:rounded-2xl p-1 sm:p-2.5 hover:shadow-md">
      <NextLink href={`/podcasts/${podcast.slug}`}>
        <div className="flex flex-col relative items-center">
          <img className="rounded-md" alt='podcast-tile' src={podcast.image} />
          <div className="absolute italic opacity-0 hover:opacity-95 transition-opacity p-5 top-0 bottom-0 right-0 left-0 flex items-center text-center bg-gray-50 bg-opacity-95 rounded-md text-gray-800">{podcast.description}</div>
          <p className="text-gray-600 mt-1 text-lg font-medium p-2 text-center my-auto">{podcast.title}</p>
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