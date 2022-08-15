import './styles.scss'

const SelectedItem = ({ teste, selectedPokemons, setSelectedPokemons }: any) => {
    const imgTeste = teste?.pokemon_v2_pokemonsprites[0]?.sprites
    const pokemonInfo = teste?.pokemon_v2_pokemonspecy
    const statsTeste = teste?.pokemon_v2_pokemonstats
    const parsed = JSON?.parse(imgTeste)

    const removePokemon = (id: any) => {
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
            <div>

                <h4 className='item-name'>{pokemonInfo.name}</h4>
                <table className='nao_sei__selected'>
                    {statsTeste.map((statusList: any) => {
                        if (statusList?.pokemon_v2_stat?.name === "special-defense" ||
                            statusList?.pokemon_v2_stat?.name === "special-attack") {
                            return;
                        }
                        return (
                            <tr key={statusList?.pokemon_v2_stat?.name} className='nao_sei'>
                                <td><b>{statusList?.pokemon_v2_stat?.name?.replace('defense', 'def')}: </b> </td>
                                <td><p>{statusList?.base_stat}</p></td>
                            </tr>
                        )
                    })
                    }
                </table>
            </div>
        </li>
    );
}

export default SelectedItem;