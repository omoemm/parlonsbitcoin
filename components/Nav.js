import NextLink from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between items-center max-w-4xl w-full p-6 md:p-8 my-0 md:my-8 mx-auto">
      <NextLink href="/">
        <a className="text-orange text-2xl font-extrabold">Parlons Bitcoin</a>
      </NextLink>
      <div className="flex flex-wrap justify-between md:flex md:flex-row md:items-center">
        <NextLink href="/podcasts">
          <a className="mr-6 text-lg font-bold">
            Podcasts
          </a>
        </NextLink>
        <NextLink href="/merci">
          <a className="mr-6 text-lg">
            👑
          </a>
        </NextLink>
        <NextLink href="/about">
          <a className="mr-6 text-lg font-bold">
            À Propos
          </a>
        </NextLink>
        <NextLink href="/contact">
          <a className="mr-6 text-lg font-bold">
            💌
          </a>
        </NextLink>
      </div>
    </nav>
  )
}