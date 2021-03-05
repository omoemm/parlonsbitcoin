import Container from "components/Container";
import PodcastPlayer from "components/PodcastPlayer";
import Newsletter from "components/Newsletter";
import Scroll from 'react-scroll'
import formatDate from 'lib/date'

const scroll = Scroll.animateScroll

export default function PodcastLayout({ children, frontMatter }) {

  const scrollToTop = () => {
    scroll.scrollToTop({duration:50})
  }

  return (
    <Container
      title={`Parlons Bitcoin - ${frontMatter.title}`}
      description={frontMatter.description}
      image={`https://parlonsbitcoin.com${frontMatter.image}`}
      date={new Date(frontMatter.date).toISOString()}
      type={"article"}
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
          {frontMatter.title}
        </h1>
        <p className="text-md text-gray-600 min-w-32">
          {formatDate(frontMatter.date)}
        </p>
        <PodcastPlayer className="my-4" simplelink={frontMatter.simplelink} />

        <div className="prose text-gray-800 max-w-none w-full">
          {children}
        </div>
      </article>
      <Newsletter />
      <div className="flex flex-col items-center max-w-2xl mx-auto my-8">
        <a
          className="hover:shadow text-sm md:text-base border border-gray-200 bg-gray-100 rounded px-6 py-4"
          onClick={scrollToTop}>
            Vers le top! ☝
        </a>
      </div>
    </Container>
  )
}