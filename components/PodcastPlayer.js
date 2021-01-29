export default function PodcastPlayer({simplelink, className=""}){
  return <iframe className={className} height="200px" width="100%" frameBorder="no" scrolling="no" seamless src={simplelink}></iframe>
}