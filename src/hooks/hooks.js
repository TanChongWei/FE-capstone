import React from 'react'
import { getCharacters, getCharDetails } from '../services/characterService'

export const useCharacters = () => {
  const [characters, setCharacters] = React.useState([])
  const [page, setPage] = React.useState(1)

  const loadCharacters = (pageNo, signal) => 
    getCharacters(pageNo, signal).then((res) => setCharacters(res))

  React.useEffect(() => {
    const abController = new AbortController()
    loadCharacters(page, abController.signal)
  }, [page])
	
  console.log('getting all characters')

  return {
    characters,
    page,
    setPage,
    loadCharacters
  }
}

export const useCharDetails = (id) => {
  const [data, setData] = React.useState([])

  const loadCharacter = (charId, signal) => 
    getCharDetails(charId, signal).then((res) => setData(res))

  React.useEffect(() => {
    const abController = new AbortController()
    loadCharacter(id, abController.signal)
  }, [id])

  console.log('getting 1 character')

  return {
    data
  }
}