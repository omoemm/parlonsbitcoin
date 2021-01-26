import NextLink from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between max-w-4xl w-full p-8 my-0 md:my-8 mx-auto">
      <NextLink href="/">
        <a className="text-orange text-2xl font-extrabold">Parlons Bitcoin</a>
      </NextLink>
      <div>
        <NextLink href="/podcasts">
          <a className="mr-6 text-lg font-bold">
            Podcasts
            </a>
        </NextLink>
        <NextLink href="/merci">
          <a className="mr-6 text-lg">
            👑</a>
        </NextLink>
        <NextLink href="/about">
          <a className="mr-6 text-lg font-bold">
            À Propos</a>
        </NextLink>
      </div>
    </nav>
  )
}