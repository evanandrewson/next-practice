export default function CharacterItem({ image, name}) {
    return (
        <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}