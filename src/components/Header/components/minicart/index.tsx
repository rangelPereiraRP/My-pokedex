import { useEffect, useState } from 'react'
import { useHooks } from '../../../../core'
import { pokemon_v2_list } from '../../../../types/itemShelf'
import SelectedItem from '../../../SelectedItem'

import './styles.scss'

function Minicart() {
    const { selectedPokemons, setSelectedPokemons, openMinicart, setOpenMinicart } = useHooks()

    useEffect(() => {
        !openMinicart && setOpenMinicart(true)
    }, [selectedPokemons])

    return (
        <div className={(openMinicart == true ? 'active ' : ' ') + 'pokemon-list-selected'}>
            <h2 onClick={() => setOpenMinicart(!openMinicart)} className='pokedex-title'>Pokemons Selecionados</h2>

            <div className="list_pokemon_item">
                {selectedPokemons?.map((element: pokemon_v2_list) => (
                    <div className='pokemon-selected'>
                        <SelectedItem selectedPokemons={selectedPokemons} setSelectedPokemons={setSelectedPokemons} pokemonList={element} />
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Minicart