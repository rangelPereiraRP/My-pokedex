export interface pokemon_v2_list {
    pokemon_v2_pokemonspecy: pokemon_v2_pokemonspecy
    pokemon_v2_pokemonsprites: pokemon_v2_pokemonsprites
    pokemon_v2_pokemonstats: pokemon_v2_pokemonstats[]
}

export interface pokemon_v2_pokemonspecy {
    name: string,
    id: number,
    generation_id: number
}

export interface pokemon_v2_pokemonsprites {
    __typename: string
    sprites: string
}

export interface pokemon_v2_pokemonstats {
    base_stat: number
    pokemon_v2_stat: pokemon_v2_stat
}

export interface pokemon_v2_stat {
    name: string
    id: number
}