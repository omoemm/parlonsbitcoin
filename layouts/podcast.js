import Container from "components/Container";
import PodcastPlayer from "components/PodcastPlayer";
import { parseISO, format } from 'date-fns';
import { fr } from 'date-fns/locale'

export default function PodcastLayout({ children, frontMatter }) {
  return (
    <Container
      title={`Parlons Bitcoin - ${frontMatter.title}`}
      description={frontMatter.description}
      //TODO check image link is correct
      image={`https://parlonsbitcoin.com${frontMatter.image}`}
      date={new Date(frontMatter.date).toISOString()}
      type={"article"}
    >
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4">
        {frontMatter.title}
      </h1>
      <p className="text-sm text-gray-500 min-w-32">
        {format(parseISO(frontMatter.date), 'dd MMMM yyyy', {locale: fr})}
      </p>
      <PodcastPlayer simplelink={frontMatter.simplelink}/>
        <div className="prose text-gray-800 max-w-none w-full">
          {children}
        </div>
      </article>
    </Container>
  )
}