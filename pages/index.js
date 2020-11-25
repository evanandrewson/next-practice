import CharacterItem from '../components/CharacterItem'

export default function CharacterList({ characters }) {
  const characterElements = characters.map(character => {
    return (
      <li key={character.id}>
        <CharacterItem {...character} />
      </li>
    )
  })
  return (
    <ul>
      {characterElements}
    </ul>
  )
}
