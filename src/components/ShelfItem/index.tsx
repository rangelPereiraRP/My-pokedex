import { pokemon_v2_list, pokemon_v2_pokemonstats } from '../../types/itemShelf'
import './styles.scss'
interface ShelfItemTypes {
    teste: pokemon_v2_list
    selectedPokemons: pokemon_v2_list[]
    setSelectedPokemons: any
 }

const ShelfItem: React.FC<ShelfItemTypes> = ({ teste, selectedPokemons, setSelectedPokemons }) => {
    const imgTeste = teste?.pokemon_v2_pokemonsprites[0]?.sprites
    const pokemonInfo = teste?.pokemon_v2_pokemonspecy
    const statsTeste = teste?.pokemon_v2_pokemonstats
    const parsed = JSON?.parse(imgTeste)

    const handleSelectPokemon = () => {
        if (selectedPokemons?.length < 6) {
            setSelectedPokemons([...selectedPokemons, teste])
        } else {
            alert('Você só pode ter 6 pokemons')
        }
    }

    return (
        <li onClick={handleSelectPokemon} key={pokemonInfo.id} className='item-wrapper'>
            <img src={parsed?.other?.home?.front_default} alt="Imagem do pokemon" className='item-image' />
            <h4 className='item-name'>{pokemonInfo?.name}</h4>
            <table className='nao_sei__dsa'>
                {statsTeste?.map((statusList: pokemon_v2_pokemonstats) => (
                    <tr className='nao_sei'>
                        <td><b>{statusList?.pokemon_v2_stat?.name?.replace('special-defense', 'sp-def')?.replace('special-attack', 'sp-atk')}: </b> </td>
                        <td><p>{statusList?.base_stat}</p></td>
                    </tr>
                ))
                }
            </table>
        </li>
    );
}

export default ShelfItem;