export default function Newsletter() {
  return (
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-lg md:text-2xl tracking-tight mb-4 text-black dark:text-white">
          Ne manque aucun épisode, abonne toi
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Je te préviendrai lorsqu'un nouvel épisode est sorti 🆕
        </p>
        {/* TODO */}
        {/* <Subscribe /> */}
      </div>
  );
}