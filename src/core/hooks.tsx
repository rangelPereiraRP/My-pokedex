import { createContext, useEffect, useMemo, useState } from 'react'

import { useGetAllTypesLazyQuery, useGetAllPokemonLazyQuery, useGetAllGenerationsQuery } from '../hooks/pokemon'


interface ShelfItemTypes {
  memoTypes: any,
  memoPokemons: any,
  memoGenerations: any,
  setSelectedGeneration: any,
  useLoading: any,
  selectedType: any,
  setSelectedType: any,
  selectedGenerationId: any,
  setSelectedGenerationId: any
}

export const WeatherContext = createContext({} as ShelfItemTypes);
const ProviderWeatherContext = ({ children }) => {
  const [loadGetAllTypes, typesData] = useGetAllTypesLazyQuery()
  const [loadGetAllPokemons, getAllPokemons] = useGetAllPokemonLazyQuery()
  const [loadGetAllGenerations, getAllGenerations] = useGetAllGenerationsQuery()
  const [selectedType, setSelectedType] = useState(1)
  const [selectedGenerationId, setSelectedGenerationId] = useState(1)

  useEffect(() => {
    loadGetAllTypes()
    setSelectedGeneration(1)
    loadGetAllGenerations()
  }, [])

  const memoTypes = useMemo(() => typesData?.data?.types || [], [typesData])
  const memoPokemons = useMemo(() => getAllPokemons, [getAllPokemons])
  const memoGenerations = useMemo(() => getAllGenerations, [getAllGenerations])

  const setSelectedGeneration = (selectedGeneration: number) => {
    loadGetAllPokemons({
      variables: {
        generation: selectedGeneration
      }
    })
  }

  const useLoading = (isLoading: boolean, children: any) => {
    if (isLoading) {
      return (
        <div className='load-wrapper'>
          <p>Carregando...</p>
        </div>
      )
    } else {
      return children
    }
  }

  return <WeatherContext.Provider
    value={{
      memoTypes,
      memoPokemons,
      memoGenerations,
      setSelectedGeneration,
      useLoading,
      selectedType,
      setSelectedType,
      selectedGenerationId,
      setSelectedGenerationId

    }}
  >
    {children}
  </WeatherContext.Provider>

}


export default ProviderWeatherContext;