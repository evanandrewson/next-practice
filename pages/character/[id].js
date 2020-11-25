import { getCharacterById, getCharacters } from "../../lib/rickAndMorty";

export default function Detail({ character }) {
  return (
    <div>
            <img src={character?.image} alt={character?.name} />
            <p>id: {character?.id}</p>
            <p>name: {character?.name}</p>
            <p>status: {character?.status}</p>
            <p>species: {character?.species}</p>
            <p>type: {character?.type}</p>
            <p>gender: {character?.gender}</p>
            <p>origin:
                <p>name: {character?.origin.name}</p>
                <p>url: {character?.origin.url}</p>
            </p>
            <p>location:
                <p>name: {character?.location.name}</p>
                <p>url: <a href={character?.location.url}>{character?.location.url}</a></p>
            </p>
            <p>url: {character?.url}</p>
            <p>created: {character?.created}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const characters = await getCharacters();
  const paths = characters.map(character => ({ params: {id: `${character.id}`} }));
  console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const character = await getCharacterById(params.id);
  return {
    props: {
      character
    }
  }
}