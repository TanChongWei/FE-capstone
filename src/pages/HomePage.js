import React from 'react'
import { CharacterCard } from '../characters/components/CharacterCard'
import {retrieveBookmarks, deleteBookmark} from '../helpers/helpers'
import '../styles/home.css'

function Home() {
  const [bookmarks, setBookmarks] = React.useState(retrieveBookmarks())
  return (
    <div className="home">
      <h3 className="text-center">Bookmarked Characters</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {bookmarks && bookmarks.map((char) => {
          return (
            <CharacterCard key={char.char_id} 
              details={char} 
              deleteBookmark={() => deleteBookmark(char, setBookmarks)} />
          )})}
      </div>
    </div>
  )
}

export default Home