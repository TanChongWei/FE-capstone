import React from 'react'
import { CharacterCard } from '../components/CharacterCard'
import {retrieveBookmarks, deleteBookmark} from '../helpers/helpers'

function Home() {
  const [bookmarks, setBookmarks] = React.useState(retrieveBookmarks())
  const charList = bookmarks.map((char) => 
    <CharacterCard key={char.char_id} details={char} deleteBookmark={() => deleteBookmark(char, setBookmarks)}/>)
  return (
    <div>
      <h3 className="text-center">Bookmarked Characters</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {bookmarks ? charList : ''}
      </div>
    </div>
  )
}

export default Home