import React from 'react'
import PropTypes from 'prop-types'

export function CharacterDetailCard(props) {
  const {
    char_id,
    img,
    name,
    nickname,
    occupation,
    birthday,
    status,
  } = props.details
  const updateBookmarks = props.updateBookmarks

  return (
    <div className="card" key={char_id} style={{width: '18rem'}}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text">{occupation.join(', ')}</p>
        <p className="card-text">{birthday}</p>
        <p className="card-text">{status}</p>
        <p className="card-text">{nickname}</p>
        {updateBookmarks ? <button className="btn btn-primary" onClick={() => updateBookmarks()}>Bookmark!</button>	: ''}
      </div>
    </div>
  )
}

CharacterDetailCard.propTypes = {
  details: PropTypes.object.isRequired,
  char_id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  occupation: PropTypes.array,
  birthday: PropTypes.string.isRequired,
  status: PropTypes.string,
  updateBookmarks: PropTypes.func
}

