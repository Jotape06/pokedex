import React from 'react'

const SearchForm = ({ onSubmit, onChange, value }) => {

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name='searchPk'
          placeholder='Buscar pokémon'
          value={value}
          onChange={onChange} />
      </form>
    </>
  )
}

export default SearchForm