import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
// import '@testing-library/jest-dom'

import {
  mockedUseGetAllPokemonLazyQuery,
  useGetAllPokemonLazyQuery,
} from './mocks'

import useHooks from '../hooks/hooks'

import {
  resulQueryFilterByWater,
  // resulQueryFirstTime,
  // resulQueryLoadMore,
  // resultFilterByWater,
  // resultFirstTimeState,
  // resultLoadMOreState,
} from './dummy.data'

describe('result__hook', () => {
  test('teste___', () => {
    useGetAllPokemonLazyQuery.mockImplementation(() => [
      mockedUseGetAllPokemonLazyQuery,
      resulQueryFilterByWater,
    ])
    
    const { result } = renderHook(() => useHooks())    
    let resultHook;
    act(() => {
      resultHook = result.current.handleClickTypes('result__hook')
    })
    
    expect(resultHook).toEqual('result__hook')
    expect(resulQueryFilterByWater.data.pokemons[0].name).toEqual('Bulbarsaur')
    expect(resulQueryFilterByWater.data.pokemons[0].id).toEqual("2")
  })
})
