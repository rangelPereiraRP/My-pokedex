import { useHooks } from '../../core'
import './styles.scss'
import { pokemon_v2_pokemonstats } from '../../types/itemShelf'


const SelectedItem = ({ pokemonList, selectedPokemons, setSelectedPokemons }: any) => {
    const { formatValue } = useHooks()
    const imgPokemon = pokemonList?.pokemon_v2_pokemonsprites[0]?.sprites
    const pokemonInfo = pokemonList?.pokemon_v2_pokemonspecy
    const pokemonStats = pokemonList?.pokemon_v2_pokemonstats
    const parsed = JSON?.parse(imgPokemon)

    const removePokemon = (id: number) => {
        const newSelectedListPokemons = selectedPokemons?.filter((item: any) => {
            if (item?.pokemon_v2_pokemonspecy?.id !== id) {
                return item
            }
        })

        setSelectedPokemons(newSelectedListPokemons)
    }

    return (
        <li onClick={() => removePokemon(pokemonInfo?.id)} key={pokemonInfo?.id} className='selected-wrapper'>
            <img src={parsed?.versions["generation-v"]["black-white"]?.animated?.front_default} alt="Imagem do pokemon" className='item-image' />
            <div className='pokemon_info_table'>
                <h4 className='item-name'>{pokemonInfo.name}</h4>
                <div className='pokemon-selected-list'>
                    {pokemonStats.map((statusList: pokemon_v2_pokemonstats) => (
                        <div key={statusList?.pokemon_v2_stat?.name} className='pokemon-selected-info'>
                            <b>{formatValue(statusList?.pokemon_v2_stat?.name)}</b>
                            <p>{statusList?.base_stat}</p>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
}

export default SelectedItem;