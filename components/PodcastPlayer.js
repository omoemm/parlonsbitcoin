export default function PodcastPlayer({children, simplelink}){
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl mx-auto mb-8">
      <iframe height="200px" width="100%" frameBorder="no" scrolling="no" seamless src={simplelink}></iframe>
      {children}
    </div>
  )
}