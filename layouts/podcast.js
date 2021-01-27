import Container from "components/Container";

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
      <h1>hello</h1>
    </Container>
  )
}