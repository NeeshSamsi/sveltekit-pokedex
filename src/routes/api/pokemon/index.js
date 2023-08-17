export async function get() {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150'

	const res = await fetch(url)
	const data = await res.json()

	const loadedPokemon = data.results.map((pokemon, index) => {
		return {
			name: pokemon.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		}
	})

	return {
		status: 200,
		body: { pokemon: loadedPokemon }
	}
}
