import React from 'react'
import PokeBase from '../components/PokeBase';
import SearchForm from '../components/SearchForm'

function Home() {
    return (
        <>
            <SearchForm />
            <PokeBase />
        </>
    )
}

export default Home
