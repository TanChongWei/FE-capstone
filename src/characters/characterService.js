export const getCharacters = (pageNo, signal) => {
  console.log('fetching game deals')
  return fetch('https://www.breakingbadapi.com/api/characters', {
    signal
  })
    .then((res) => res.json())
    .catch(e => console.log('error', e))
}

export const getCharDetails = (charId, signal) => {
  console.log('fetching deal by id')
  return fetch(`https://www.breakingbadapi.com/api/characters/${charId}`, {signal})
    .then((res) => res.json())
    .catch(e => console.log(e))
}
