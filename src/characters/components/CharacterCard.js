import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../../styles/characterCard.css'

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

  const [bookmark, setBookmark] = React.useState(null)

  return (
    <div className="text-decoration-none card character-card m-2 shadow p-3 mb-5" style={{width: '18rem'}}>
      <img src={img} className="card-img-top" style={{height: '22rem'}} alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <p className="card-text overflow"><b>Occupation:</b> {occupation[0].slice(0, 20)}</p>
        <p className="card-text"><b>Nickname:</b> {nickname}</p>
      </div>
      <Link key={char_id} to={`/char/${char_id}`} className="text-decoration-none character-card shadow p-3 mb-5">Details </Link>
      <div className="d-flex justify-content-center align-bottom">
        {
          deleteBookmark 
            ? <button className="btn btn-danger" onClick={() => deleteBookmark()}>Delete bookmark</button>
            : <button className="btn btn-primary" 
              disabled={(bookmark || !updateBookmarks)}
              onClick={() => {updateBookmarks(); setBookmark(true)}}>
              {(bookmark || !updateBookmarks) ? 'Bookmarked' : 'Bookmark'}
            </button>
        }
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