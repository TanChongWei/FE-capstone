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

// {"char_id":1,
// "name":"Walter White",
// "birthday":"09-07-1958",
// "occupation":["High School Chemistry Teacher","Meth King Pin"],
// "img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
// "status":"Presumed dead",
// "nickname":"Heisenberg",
// "appearance":[1,2,3,4,5],
// "portrayed":"Bryan Cranston",
// "category":"Breaking Bad",
// "better_call_saul_appearance":[]}

/* 
appearance: (5) [1, 2, 3, 4, 5]
better_call_saul_appearance: []
birthday: "09-07-1958"
category: "Breaking Bad"
char_id: 1
img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
name: "Walter White"
nickname: "Heisenberg"
occupation: (2) ['High School Chemistry Teacher', 'Meth King Pin']
portrayed: "Bryan Cranston"
status: "Presumed dead"
*/