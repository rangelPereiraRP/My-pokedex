import { gql } from "@apollo/client"
import * as Types from '../types'
import * as Apollo from '@apollo/client'

export const GetAllPokemon = gql`
    query GET_POKEMONS($generation: Int, $type: Int) {
      pokemons: pokemon_v2_pokemon( 
        where: {
            pokemon_v2_pokemonspecy: {
              generation_id: {
                  _eq: $generation
                }
            },
            pokemon_v2_pokemontypes: {
              pokemon_v2_type: {
                id: {
                  _eq: $type
                }
              }
            },
            pokemon_v2_pokemonforms: {
              is_mega: {
                _eq: false
              }
              form_name: {
                _eq: ""
              }
            }
        },
        order_by: {pokemon_species_id: asc},
      ) {
        pokemon_v2_pokemonspecy {
          name
          id
          generation_id
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
          }
        }
      }
  }
`

export const GetAllPokemon2 = gql`
    query GET_POKEMONS($generation: Int) {
      pokemons: pokemon_v2_pokemon( 
        where: {
            pokemon_v2_pokemonspecy: {
              generation_id: {
                  _eq: $generation
                }
            },
            pokemon_v2_pokemonforms: {
              is_mega: {
                _eq: false
              }
              form_name: {
                _eq: ""
              }
            }
        },
        order_by: {pokemon_species_id: asc},
      ) {
        pokemon_v2_pokemonspecy {
          name
          id
          generation_id
        }
        pokemon_v2_pokemonsprites {
          sprites
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            id
          }
        }
      }
  }
`

export const GetAllGenerations = gql`
  query GET_GENERATIONS {
      generation: pokemon_v2_generation {
        name
        id
      }
    }
`
export type GetAllPokemonQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>
  offset?: Types.Maybe<Types.Scalars['Int']>
  where?: Types.Maybe<Types.PokemonWhere>
}>

export type GetAllPokemonQuery = {
  pokemons: Array<
    Pick<Types.Pokemon, 'id' | 'name'> & {
      types: Array<Types.PokemonType>
    }
  >
}

export type GetAllTypesQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetAllTypesQuery = {
  types: Array<Types.Types>
}

export const GetAllTypes = gql`
  query getAllTypes {
    types: pokemon_v2_type {
      id
      name
    }
  }
`

export function useGetAllPokemonLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPokemonQuery,
    GetAllPokemonQueryVariables
  >
) {
  const options = { ...baseOptions }
  return Apollo.useLazyQuery<GetAllPokemonQuery, GetAllPokemonQueryVariables>(
    GetAllPokemon,
    options
  )
}

// Apollo lazy query get all types
export function useGetAllTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTypesQuery,
    GetAllTypesQueryVariables
  >
) {
  const options = { ...baseOptions }
  return Apollo.useLazyQuery<GetAllTypesQuery, GetAllTypesQueryVariables>(
    GetAllTypes,
    options
  )
}