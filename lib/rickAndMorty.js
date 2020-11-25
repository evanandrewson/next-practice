export const getCharacters = (page=1) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(res => res.json())
      .then(json => json.results.map(character => {
          return {
              id: character.id,
              name: character.name,
              image: character.image
          }
      }))
}

export const getCharacterById = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
}