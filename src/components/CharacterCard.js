import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function CharacterCard(props) {
  const {
    char_id,
    img,
    name,
    occupation,
    nickname,
  } = props.details
  const updateBookmarks = props.updateBookmarks
  const deleteBookmark = props.deleteBookmark

  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={img} className="card-img-top" style={{height: '22rem'}} alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text">{occupation.join(', ')}</p>
        <p className="card-text">{nickname}</p>
        <Link to={`/char/${char_id}`} className="btn btn-primary">Details</Link>
        {updateBookmarks ? <button className="btn btn-primary" onClick={() => updateBookmarks()}>Bookmark!</button>	: ''}
        {deleteBookmark ? <button className="btn btn-danger" onClick={() => deleteBookmark()}>Delete bookmark</button>: ''}
      </div>
    </div>
  )
}

CharacterCard.propTypes = {
  details: PropTypes.object.isRequired,
  char_id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.array,
  nickname: PropTypes.string,
  updateBookmarks: PropTypes.func,
  deleteBookmark: PropTypes.func
}