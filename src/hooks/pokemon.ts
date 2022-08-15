import * as Apollo from '@apollo/client'

import {
  GetAllTypes,
  GetAllPokemon,
  GetAllGenerations
  // GetAllTypesQuery,
  // GetAllTypesQueryVariables,
} from '../gqlservices/graphql/GET_ALL_POKEMONS'


// Apollo lazy query get all types
export function useGetAllTypesLazyQuery() {
  return Apollo.useLazyQuery(GetAllTypes)
}

export function useGetAllPokemonLazyQuery() {
  return Apollo.useLazyQuery(GetAllPokemon)
}

export function useGetAllGenerationsQuery() {
  return Apollo.useLazyQuery(GetAllGenerations)
}

// export type GetAllPokemonQuery = {
//   pokemons: Array<
//     Pick<Types.Pokemon, 'id' | 'name'> & {
//       types: Array<Types.PokemonType>
//     }
//   >
// }



