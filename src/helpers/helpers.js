export function updateBookmarks(character) {
  const currentStore = JSON.parse(localStorage.getItem('bookmarked'))

  if (currentStore) {
    for (const char of currentStore) {
      if (char.char_id === character.char_id) return 
    }
    currentStore.push(character)
    return localStorage.setItem('bookmarked', JSON.stringify(currentStore))
  }
  return localStorage.setItem('bookmarked', JSON.stringify([character]))
}

export function deleteBookmark(character, setState) {
  const currentStore = JSON.parse(window.localStorage.getItem('bookmarked'))
  const newStore = currentStore.filter(char => char.char_id !== character.char_id)
  localStorage.setItem('bookmarked', JSON.stringify(newStore))
  setState(newStore)
}

export function retrieveBookmarks() {
  return JSON.parse(localStorage.getItem('bookmarked'))
}