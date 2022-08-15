import { useCallback, useEffect, useMemo, useRef, useState } from 'react'


// import { DEFAULT_LIST_PARAMETER } from './config/constants'
// import { useGetAllPokemonLazyQuery } from '../gqlservices/graphql/GET_ALL_POKEMONS'
// import { GetAllPokemonQuery } from './pokemon'

const useHooks = () => {
  // handle click types multiple value
  const handleClickTypes = (value)  => (
    value
  )

  return {
    handleClickTypes,
  }
}

export default useHooks
