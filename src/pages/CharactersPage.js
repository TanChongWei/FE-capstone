import React from 'react'
import { useCharacters } from '../characters/hooks/characters'
import {updateBookmarks, retrieveBookmarks} from '../helpers/helpers'
import {CharacterCard} from '../characters/components/CharacterCard'

function Characters() {
  const {characters} = useCharacters()
  const store = retrieveBookmarks()
  const bookmarked = store ? store.map(char => char.char_id) : []
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {characters && characters.map((char) => {
        return (
          <CharacterCard key={char.char_id} 
            details={char} 
            updateBookmarks={bookmarked.indexOf(char.char_id) < 0 ? () => updateBookmarks(char) : null} />
        )
      })}
    </div>
  )
}

export default Characters
