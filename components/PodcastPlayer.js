export default function PodcastPlayer({children, simplelink}){
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
      <iframe height="200px" width="100%" frameBorder="no" scrolling="no" seamless src={simplelink}></iframe>
      {children}
    </div>
  )
}