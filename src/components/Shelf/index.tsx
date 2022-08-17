import React, { useEffect, useState } from 'react';
import './styles.scss'
import ShelfItem from '../ShelfItem';
import SelectedItem from '../SelectedItem';
import { pokemon_v2_list } from '../../types/itemShelf'
import { useHooks } from '../../core'

const Shelf: React.FC = () => {
    const [selectedPokemons, setSelectedPokemons] = useState<pokemon_v2_list[]>([])
    const [selectedPokemonsSSS, setSelectedPokemonsSSS] = useState<any[]>([])
    const { memoPokemons, memoAllPokemons, useLoading, selectedStatus, selectedType } = useHooks()
    const { loading: loadingPokemons, data: dataPokemons } = memoPokemons
    const { data: dataAllPokemons } = memoAllPokemons

    useEffect(() => {
        if (!loadingPokemons && !loadingPokemons) {
            if (selectedStatus === 'name' && selectedType === 'none') {
                return setSelectedPokemonsSSS(dataAllPokemons?.pokemons)
            }

            if (selectedType === 'none') {
                const rangelTeste = dataAllPokemons?.pokemons?.slice(0, 500)?.sort((a: any, b: any) => {
                    return b.pokemon_v2_pokemonstats[selectedStatus].base_stat - a.pokemon_v2_pokemonstats[selectedStatus].base_stat
                })
                return setSelectedPokemonsSSS(rangelTeste)
            }

            if (selectedStatus === 'name') {
                return setSelectedPokemonsSSS(dataPokemons?.pokemons)
            }

            const rangelTeste = dataPokemons?.pokemons?.slice(0, 500)?.sort((a: any, b: any) => {
                return b.pokemon_v2_pokemonstats[selectedStatus].base_stat - a.pokemon_v2_pokemonstats[selectedStatus].base_stat
            })

            setSelectedPokemonsSSS(rangelTeste)
        }
    }, [dataPokemons, dataAllPokemons, selectedStatus, selectedType])

    return (
        <section className='shelf'>
            <div className='container_main'>
                {useLoading(loadingPokemons, (
                    <ul className='pokemon-list'>
                        {selectedPokemonsSSS?.map((pokemon: pokemon_v2_list) => {
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