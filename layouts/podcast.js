import Container from "components/Container";
import PodcastPlayer from "components/PodcastPlayer";

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
      <PodcastPlayer simplelink={frontMatter.simplelink}/>
      <article>
        <h1>
          {frontMatter.title}
        </h1>
      </article>
    </Container>
  )
}