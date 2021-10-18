import React from 'react'
import { useCharacters } from '../hooks/hooks'

import {updateBookmarks} from '../helpers/helpers'
import {CharacterCard} from '../components/CharacterCard'

function Characters() {
  const {characters} = useCharacters()
  const charList = characters.map((char) => 
    <CharacterCard key={char.char_id} details={char} updateBookmarks={() => updateBookmarks(char)} />)
  return (
    <div className="d-flex flex-wrap">
      {charList}
    </div>
  )
}

export default Characters
