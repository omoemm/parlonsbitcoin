import React from 'react'
import NextLink from 'next/link'

function Card({ podcast }) {
  return (
    <div
      className="w-full shadow-lg  cursor-pointer  bg-white rounded-lg sm:rounded-2xl p-1 sm:p-2.5 hover:shadow-md">
      <NextLink href={`/podcasts/${podcast.slug}`}>
        <div className="flex flex-col items-center relative h-full">
          <img className="rounded-md" alt='podcast-tile' src={podcast.image} />
          <div
            className="flex text-gray-600 text-sm md:text-lg font-medium p-2 text-center h-full items-center">
            {podcast.title}
          </div>
          <div
            className="absolute opacity-0 hover:opacity-95 transition-opacity md:p-5 top-0 bottom-0 right-0 left-0 flex items-center text-center md:text-lg bg-gray-50 bg-opacity-95 rounded-md text-gray-800">
            {podcast.description}
            </div>
        </div>
      </NextLink>
    </div>
  )
}



export default function PodcastLayout({ podcasts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl gap-4 md:gap-6 mx-auto mb-6 md:mb-8">
      {podcasts.map((podcast) => (
        <Card
          key={podcast.slug}
          podcast={podcast}
        />
      ))}
    </div>
  )
}