import NextLink from 'next/link'

export default function Nav() {
  return (
    <nav className="flex justify-between max-w-4xl w-full p-8 my-0 md:my-8 mx-auto">
      <NextLink href="/">
        <a className="text-orange text-xl">Parlons Bitcoin</a>
      </NextLink>
      <div>
        <NextLink href="/episodes">
          <a className="mr-6 font-medium text-lg">
            Épisodes
            </a>
        </NextLink>
        <NextLink href="/merci">
          <a className="mr-6 font-medium text-lg">
            👑</a>
        </NextLink>
        <NextLink href="/about">
          <a className="mr-6 font-medium text-lg">
            À Propos</a>
        </NextLink>
      </div>
    </nav>
  )
}