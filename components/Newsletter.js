import React from 'react'


export default function Newsletter() {
  const [showForm, setShowFrom] = React.useState(false)

  return (
      <div className="flex flex-col justify-center items-start max-w-md mx-auto my-8">
        <button className="rounded-md shadow-md hover:shadow-sm font-bold text-lg md:text-xl tracking-tight border px-6 py-4 self-center w-full" onClick={() => setShowFrom(!showForm)}>
          {showForm ? "➖" : "Ne manque aucun épisode, abonne-toi 🚀"}
        </button>
        {showForm &&
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfCHsiwmrZS1xcZRVD5D_Ok2HJ1XJzvqYItYgP636nKROBsNg/viewform?embedded=true" frameborder="0" marginheight="0" height="460" marginwidth="0" className="w-full">Loading…</iframe>
        }
      </div>
  );
}