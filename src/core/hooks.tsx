import { createContext, useEffect, useMemo, useState } from 'react'
import { useGetAllTypesLazyQuery, useGetAllPokemonLazyQuery, useGetAllGenerationsQuery, useGetAllPokemonLazyQuery2 } from '../hooks/pokemon'


interface ShelfItemTypes {
  memoTypes: any,
  memoPokemons: any,
  memoAllPokemons: any,
  memoGenerations: any,
  setSelectedGeneration: any,
  useLoading: any,
  selectedType: any,
  setSelectedType: any,
  selectedGenerationId: any,
  setSelectedGenerationId: any,
  selectedStatus: any,
  setSelectedStatus: any
}

export const WeatherContext = createContext({} as ShelfItemTypes);
const ProviderWeatherContext = ({ children }) => {
  const [loadGetAllTypes, typesData] = useGetAllTypesLazyQuery()
  const [loadGetAllPokemons, getAllPokemons] = useGetAllPokemonLazyQuery()
  const [loadGetAllPokemons2, getAllPokemons2] = useGetAllPokemonLazyQuery2()
  const [loadGetAllGenerations, getAllGenerations] = useGetAllGenerationsQuery()
  const [selectedType, setSelectedType] = useState('none') as any
  const [selectedStatus, setSelectedStatus] = useState(0) as any
  const [selectedGenerationId, setSelectedGenerationId] = useState(1)

  useEffect(() => {
    loadGetAllTypes()
    setSelectedGeneration()
    loadGetAllGenerations()
  }, [])

  const memoTypes = useMemo(() => typesData?.data?.types || [], [typesData])
  const memoPokemons = useMemo(() => getAllPokemons, [getAllPokemons])
  const memoAllPokemons = useMemo(() => getAllPokemons2, [getAllPokemons2])
  const memoGenerations = useMemo(() => getAllGenerations?.data, [getAllGenerations])

  const setSelectedGeneration = () => {
    loadGetAllPokemons({
      variables: {
        generation: selectedGenerationId,
        type: selectedType === 'none' ? 0 : selectedType
      }
    })
    loadGetAllPokemons2({
      variables: {
        generation: selectedGenerationId
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
      memoAllPokemons,
      memoGenerations,
      setSelectedGeneration,
      useLoading,
      selectedType,
      setSelectedType,
      selectedGenerationId,
      setSelectedGenerationId,
      selectedStatus,
      setSelectedStatus
    }}
  >
    {children}
  </WeatherContext.Provider>

}


export default ProviderWeatherContext;