import NextLink from 'next/link'

export default function Nav() {
  return (
    <div className="flex justify-between max-w-4xl w-full p-8 mx-auto">
      <NextLink href="/">
        <a className="text-orange">Parlons Bitcoin</a>
      </NextLink>
      <div>
        <NextLink href="/episodes">
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
            Épisodes
            </a>
        </NextLink>
        <NextLink href="/merci">
        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
            👑</a>
        </NextLink>
        <NextLink href="/about">
        <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
            À Propos</a>
        </NextLink>
      </div>
    </div>
  )
}