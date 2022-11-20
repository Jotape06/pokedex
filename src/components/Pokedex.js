import React from 'react'
import PokedexImg from '../images/pokedex.png'
import SearchForm from './SearchForm'
import Title from './Title'

const Pokedex = () => {

    const [poke, setPoke] = React.useState([])
    const [pokeData, setPokeData] = React.useState()

    React.useEffect(() => {
        if (!pokeData)
            setPoke({
                name: 'Bulbasaur',
                id: 1
            })
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPoke({ name: 'Carregando...', id: null})
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeData.toLowerCase()}`)
        if (APIResponse.status === 200) {
            const response = await APIResponse.json()
            setPoke(response)
            setPokeData('')
        } else {
            setPoke({ name: 'Não encontrado', id: null })
        }
    }

    return (
        <section>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif`}
                alt="PokemonImage"
                className={poke.id === null ? 'pokegifnone' : 'pokegif'}
            />
            <Title
                pokeName={poke.name}
                pokeNumber={poke.id}
            />
            <SearchForm
                onSubmit={handleSubmit}
                value={pokeData}
                onChange={(e) => setPokeData(e.target.value)}
            />
            <img src={PokedexImg} alt="Pokedex Background" className='pokedex' />
        </section>
    )
}

export default Pokedex