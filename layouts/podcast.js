import Container from "components/Container";
import PodcastPlayer from "components/PodcastPlayer";
import { parseISO, format } from 'date-fns';
import { fr } from 'date-fns/locale'
import Scroll from 'react-scroll'

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
        <p className="text-sm text-gray-500 min-w-32">
          {format(parseISO(frontMatter.date), 'dd MMMM yyyy', { locale: fr })}
        </p>
        <PodcastPlayer className="my-4" simplelink={frontMatter.simplelink} />

        <div className="prose text-gray-800 max-w-none w-full">
          {children}
        </div>
      <a
        className="hover:shadow mx-auto text-sm md:text-base mt-2 border border-gray-200 rounded px-6 py-4"
        onClick={scrollToTop}>
          Vers le top! ☝
      </a>
      </article>
    </Container>
  )
}