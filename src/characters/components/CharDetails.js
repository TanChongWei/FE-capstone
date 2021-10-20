/* eslint-disable react/prop-types */
import React from 'react'
import { useCharDetails } from '../hooks/characters'
import { updateBookmarks } from '../../helpers/helpers'
import { CharacterDetailCard } from './CharacterDetailCard'

export const CharDetails = ({charId}) => {
  console.log(charId)
  const {data} = useCharDetails(charId)

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {data.length 
        ? <CharacterDetailCard details={data[0]} updateBookmarks={() => updateBookmarks(data[0])}/> 
        : ''
      }
    </div>
  )
}
