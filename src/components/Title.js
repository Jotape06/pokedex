import React from 'react'

const Title = ({ pokeNumber, pokeName }) => {
    return (
        <>
            <h1 className='dexTitle'>{pokeNumber} -
                <span> {pokeName}</span>
            </h1>
        </>
    )
}

export default Title