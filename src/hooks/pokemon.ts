import * as Apollo from '@apollo/client'

import {
  GetAllTypes,
  GetAllPokemon,
  GetAllGenerations,
  GetAllPokemon2
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

export function useGetAllPokemonLazyQuery2() {
  return Apollo.useLazyQuery(GetAllPokemon2)
}

export function useGetAllGenerationsQuery() {
  return Apollo.useLazyQuery(GetAllGenerations)
}
