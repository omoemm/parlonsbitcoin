import NextLink from 'next/link'

export default function Nav() {
  return (
    <nav className="flex flex-col space-y-2 md:flex-row justify-between items-center max-w-4xl w-full p-6 md:p-8 my-0 md:my-8 mx-auto">
      <NextLink href="/">
        <a className="text-orange text-2xl font-extrabold">Parlons Bitcoin</a>
      </NextLink>
      <div className="flex flex-row space-x-4 md:space-x-6 md:items-center">
        <NextLink href="/about">
          <a className="text-lg font-bold">
            À Propos
          </a>
        </NextLink>
        <NextLink href="/podcasts">
          <a className="text-lg font-bold">
            Podcasts
          </a>
        </NextLink>
        <NextLink href="/merci">
          <a className="text-lg font-bold">
            Merci
          </a>
        </NextLink>
        <NextLink href="/contact">
          <a className="text-lg font-bold">
            Contact
          </a>
        </NextLink>
      </div>
    </nav>
  )
}