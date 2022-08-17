import { useHooks } from '../../core'
import { pokemon_v2_list, pokemon_v2_pokemonstats } from '../../types/itemShelf'
import './styles.scss'
interface ShelfItemTypes {
    pokemonList: pokemon_v2_list
    selectedPokemons: pokemon_v2_list[]
    setSelectedPokemons: any
}

const ShelfItem: React.FC<ShelfItemTypes> = ({ pokemonList, selectedPokemons, setSelectedPokemons }) => {
    const { formatValue } = useHooks()
    const imgpokemonList = pokemonList?.pokemon_v2_pokemonsprites[0]?.sprites
    const pokemonInfo = pokemonList?.pokemon_v2_pokemonspecy
    const statspokemonList = pokemonList?.pokemon_v2_pokemonstats
    const parsed = JSON?.parse(imgpokemonList)

    const handleSelectPokemon = () => {
        if (selectedPokemons?.length < 6) {
            setSelectedPokemons([...selectedPokemons, pokemonList])
        } else {
            alert('Você só pode ter 6 pokemons')
        }
    }

    return (
        <li onClick={handleSelectPokemon} key={pokemonInfo.id} className='item-wrapper'>
            <img src={parsed?.other?.home?.front_default} alt="Imagem do pokemon" className='item-image' />
            <h4 className='item-name'>{pokemonInfo?.name}</h4>
            <div className='pokemon-selected__dsa'>
                {statspokemonList?.map((statusList: pokemon_v2_pokemonstats) => (
                    <div className='pokemon-selected'>
                        <b>{formatValue(statusList?.pokemon_v2_stat?.name)}</b>
                        <p>{statusList?.base_stat}</p>
                    </div>
                ))}
            </div>
        </li>
    );
}

export default ShelfItem;