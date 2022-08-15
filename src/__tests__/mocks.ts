const mockedUseGetAllPokemonLazyQuery = jest.fn()
const mockedUseGetAllTypesLazyQuery = jest.fn()

const useGetAllTypesLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedUseGetAllTypesLazyQuery, undefined])

const useGetAllPokemonLazyQuery = jest
  .fn()
  .mockImplementation(() => [mockedUseGetAllPokemonLazyQuery, undefined])

jest.mock('../hooks/pokemon', () => ({
  useGetAllTypesLazyQuery,
  useGetAllPokemonLazyQuery,
}))

export {
  mockedUseGetAllPokemonLazyQuery,
  mockedUseGetAllTypesLazyQuery,
  useGetAllPokemonLazyQuery,
  useGetAllTypesLazyQuery,
}
