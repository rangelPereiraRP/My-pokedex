import React, { useContext, useEffect, useState } from 'react';
import './styles.scss'
import ShelfItem from '../ShelfItem';
import SelectedItem from '../SelectedItem';
import Filters from '../Filters';

import { pokemon_v2_list } from '../../types/itemShelf'
import { useHooks } from '../../core'

const Shelf: React.FC = () => {
    const [selectedPokemons, setSelectedPokemons] = useState<pokemon_v2_list[]>([])
    const { memoPokemons, useLoading } = useHooks()
    const { loading: loadingPokemons, data: dataPokemons } = memoPokemons

    return (
        <section className='shelf'>
            <Filters />

            <div className='container_main'>
                {useLoading(loadingPokemons, (
                    <ul className='pokemon-list'>
                        {dataPokemons?.pokemons?.map((pokemon: pokemon_v2_list) => {
                            return (
                                <ShelfItem selectedPokemons={selectedPokemons} setSelectedPokemons={setSelectedPokemons} teste={pokemon} />
                            )
                        })}
                    </ul>
                ))}

                <div className='pokemon-list-selected'>
                    <h2 className='pokedex-title'>Pokemons Selecionados</h2>
                    {useLoading(loadingPokemons, (
                        selectedPokemons?.map((element: pokemon_v2_list) => (
                            <div className='pokemon-selected'>
                                <SelectedItem selectedPokemons={selectedPokemons} setSelectedPokemons={setSelectedPokemons} teste={element} />
                            </div>
                        ))
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Shelf;