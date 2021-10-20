import React from 'react'
import PropTypes from 'prop-types'
import { retrieveBookmarks } from '../../helpers/helpers'
import '../../styles/characterCard.css'

export function CharacterDetailCard(props) {
  const {
    char_id,
    img,
    name,
    nickname,
    occupation,
    portrayed,
    birthday,
    status,
  } = props.details
  const updateBookmarks = props.updateBookmarks
  const bookmarked = (retrieveBookmarks().map(char => char.char_id)).indexOf(char_id) >= 0

  const [bookmark, setBookmark] = React.useState(null)

  return (
    <div className="container-fluid d-flex w-100" key={char_id} style={{width: '18rem', height:'100vh'}}>
      <div className="w-25">
        <img src={img} className="img-thumbnail" alt={name} />
      </div>
      <div className="flex-column m-5 text-white">
        <p>Character details</p>
        <p className="card-title">Name: {name}</p>
        <p className="card-text">Portrayed by: {portrayed}</p>
        <p className="card-text">Previously held occupation(s): {occupation.join(', ')}</p>
        <p className="card-text">Birth Date: {birthday}</p>
        <p className="card-text">Status: {status}</p>
        <p className="card-text">Aliases: {nickname}</p>
        {<button 
          className="btn btn-primary" 
          onClick={() => {updateBookmarks(); setBookmark(true)}} 
          disabled={bookmarked || bookmark}
        >
          {bookmarked || bookmark ? 'Already bookmarked!' : 'Bookmark!'}</button>}
      </div>
    </div>
  )
}

CharacterDetailCard.propTypes = {
  details: PropTypes.object.isRequired,
  char_id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  portrayed: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  occupation: PropTypes.array,
  birthday: PropTypes.string,
  status: PropTypes.string,
  updateBookmarks: PropTypes.func
}

