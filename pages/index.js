import CharacterItem from '../components/CharacterItem';
import { getCharacters } from '../lib/rickAndMorty';

export default function CharacterList({ characters }) {
  const characterElements = characters.map(character => {
    return (
      <li key={character.id}>
        <CharacterItem {...character} />
      </li>
    )
  });
  return (
    <ul>
      {characterElements}
    </ul>
  );
};

export async function getStaticProps() {
  const characters = await getCharacters();

  return {
    props: {
      characters
    }
  }
};