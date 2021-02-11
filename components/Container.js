import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Container(props) {

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Parlons Bitcoin - Brisons le mythe',
    description: `Le podcast francophone qui te fait comprendre l'argent du futur, le Bitcoin`,
    image: 'https://parlonsbitcoin.com/static/images/podcast-square.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-orwhite">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content="bitcoin, podcast, fr, français"/>
        <meta property="og:url" content={`https://parlonsbitcoin.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Parlons Bitcoin" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omoemm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Nav />
      <main className="px-8">
      {children}
      </main>
      <Footer />
    </div>
  )
}