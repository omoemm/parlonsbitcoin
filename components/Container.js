import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Container({ children, customMeta }) {

  const router = useRouter();
  const meta = {
    title: 'Parlons Bitcoin - Brisons le mythe.',
    description: `TODO`,
    image: '', //TODO
    type: 'website',
    ...customMeta
  };


  return (
    <div className="bg-orwhite">
      <Head>
        <title>{meta.title}</title>
        {/* TOOD check the robots are correct */}
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* TOOD check the URL is correct */}
        <meta property="og:url" content={`https://parlonsbitcoin.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Parlons Bitcoin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* TOOD check the twitter cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omoemm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* TODO check podcast key exist */}
        {meta.date && (
          <meta property="podcast:published_time" content={meta.date} />
        )}
        {/* TODO add keywords */}
      </Head>

      <Nav />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}