import NextLink from 'next/link'

export default function Nav() {
  return (
    <>
      <NextLink href="/">
        <a>Parlons Bitcoin</a>
      </NextLink>
      <div>
        <NextLink href="/episodes">
          <a>
            Épisodes
            </a>
        </NextLink>
        <NextLink href="/meric">
          <a>👑</a>
        </NextLink>
        <NextLink href="/about">
          <a>À Propos</a>
        </NextLink>
      </div>
    </>
  )
}