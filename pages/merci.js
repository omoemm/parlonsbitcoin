import Container from 'components/Container'
import contributors from 'data/contributors'
import React from 'react'

function MusicPlayer() {
  return (
    <iframe className="my-4" width="100%" height="200" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/757008745&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true" />
  )
}

function HallOfFame() {
  // const [contributors, setContributors] = React.useState(contributors)

  return (
    <>
      <h2 className="font-bold text-lg md:text-3xl tracking-tight my-4">Mur de Gloire <p className="font-normal text-sm text-gray-500">un commentaire, une 👑</p></h2>
      <h2 className="text-2xl mb-3">👑👑</h2>
      {contributors["👑👑"]}
      <h2 className="text-2xl mb-3">👑</h2>
      {contributors["👑"]}
    </>
  )
}

export default function Merci() {
  return (
    <Container>
      <div className="flex flex-col max-w-2xl items-start mx-auto mb-4 md:my-8">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight text-black mb-4">Merci</h1>
        <p className="text-gray-900 mb-2">
          Parlons Bitcoin ne serait pas possible sans toutes les personnes qui y ont contribué.
        </p>
        <p className="text-gray-900 mb-2">À commencer par la musique créée par <a target="_blank" className="text-orange underline font-semibold" href="https://nottyvondutch.wixsite.com/portal/music">Notty VonDutch</a> 🎶</p>
        <MusicPlayer />
        <p className="text-gray-900 mb-2">Un énorme merci à toutes celles et ceux qui m'ont partagé leurs commentaires pour que chaque podcast soit meilleur que le précédent.</p>

        <p className="text-gray-900 mb-2">Vous avez dûment mérité votre place sur le Mur de Gloire 🌟</p>
        <HallOfFame/>
      </div>
    </Container>
  )
}