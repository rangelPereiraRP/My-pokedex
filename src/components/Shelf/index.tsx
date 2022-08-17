import React, { useEffect, useState } from 'react';
import './styles.scss'
import ShelfItem from '../ShelfItem';
import { pokemon_v2_list } from '../../types/itemShelf'
import { useHooks } from '../../core'

const Shelf: React.FC = () => {
    const [selectedPokemonsSSS, setSelectedPokemonsSSS] = useState<any[]>([])
    const { openMinicart, memoPokemons, selectedPokemons, setSelectedPokemons, memoAllPokemons, useLoading, selectedStatus, selectedType } = useHooks()
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
                    <ul className={(openMinicart == true ? 'active ' : ' ') + 'pokemon-list'}>
                        {selectedPokemonsSSS?.map((pokemon: pokemon_v2_list) => {
                            return (
                                <ShelfItem selectedPokemons={selectedPokemons} setSelectedPokemons={setSelectedPokemons} pokemonList={pokemon} />
                            )
                        })}
                    </ul>
                ))}
            </div>
        </section>
    );
}

export default Shelf;