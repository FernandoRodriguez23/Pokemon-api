import { useState, useEffect } from 'react'


const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon`;

const useFetch = (query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchPokemon = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    };

    useEffect(() => {
        console.log(`${API_ENDPOINT}${query}`);
        fetchPokemon(`${API_ENDPOINT}${query}`)
    }, [query]);

    return {loading, data}
}

export default useFetch
