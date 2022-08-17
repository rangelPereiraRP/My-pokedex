import { createContext, useEffect, useMemo, useState } from 'react'
import { useGetAllTypesLazyQuery, useGetAllPokemonLazyQuery, useGetAllGenerationsQuery, useGetAllPokemonLazyQuery2 } from '../hooks/pokemon'
import { pokemon_v2_list } from '../types/itemShelf';


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
  setSelectedStatus: any,
  selectedPokemons: any,
  setSelectedPokemons: any
  openMinicart: any,
  setOpenMinicart: any,
  formatValue: any
}

export const WeatherContext = createContext({} as ShelfItemTypes);
const ProviderWeatherContext = ({ children }) => {
  const [loadGetAllTypes, typesData] = useGetAllTypesLazyQuery()
  const [loadGetAllPokemons, getAllPokemons] = useGetAllPokemonLazyQuery()
  const [loadGetAllPokemons2, getAllPokemons2] = useGetAllPokemonLazyQuery2()
  const [loadGetAllGenerations, getAllGenerations] = useGetAllGenerationsQuery()
  const [selectedType, setSelectedType] = useState('none') as any
  const [selectedStatus, setSelectedStatus] = useState('name') as any
  const [selectedGenerationId, setSelectedGenerationId] = useState(1)
  const [selectedPokemons, setSelectedPokemons] = useState<pokemon_v2_list[]>([])
  const [openMinicart, setOpenMinicart] = useState(true)

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

  const formatValue = (element: string) => {
    let attName: string;
    switch (element) {
      case 'special-defense':
        attName = element?.replace('special-defense', 'Sp-def: ')
        break;
      case 'special-attack':
        attName = element?.replace('special-attack', 'Sp-atk: ')
        break;
      case 'defense':
        attName = element?.replace('defense', 'Def: ')
        break;
      case 'attack':
        attName = element?.replace('attack', 'Atk: ')
        break;
      case 'hp':
        attName = element?.replace('hp', 'Hp: ')
        break;
      case 'speed':
        attName = element?.replace('speed', 'Speed: ')
        break;
      default:
        break;
    }
    return attName;
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
      setSelectedStatus,
      selectedPokemons,
      setSelectedPokemons,
      openMinicart,
      setOpenMinicart,
      formatValue
    }}
  >
    {children}
  </WeatherContext.Provider>

}


export default ProviderWeatherContext;