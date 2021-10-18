import { CharDetails } from '../components/CharDetails'
import { useParams } from 'react-router-dom'
import React from 'react'

function charListingPage() {
  const params = useParams()

  return <CharDetails charId={params.charId} />
}

export default charListingPage