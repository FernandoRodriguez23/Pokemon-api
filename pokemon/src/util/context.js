import React, {useReducer, useContext, useEffect, useState} from 'react';
import { reducer } from "./reducer";

const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon`;


const initialState = {
    loading: true,
    results: [],
    next: '',
    prev: '',
    query: ''
}

const PokemonContext = React.createContext();

export const PokemonProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchPokemon = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({type: 'SET_RESULTS', payload: data});
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = (query) => {
        dispatch({type: 'HANDLE_SEARCH', payload: query});
    }

    const handlePage = (value) => {
        dispatch({type: 'HANDLE_PAGE', payload: value})
    }

    

    useEffect(() => {
        fetchPokemon(`${API_ENDPOINT}`);
    }, [])

    useEffect(() => {
        fetchPokemon(`${API_ENDPOINT}/${state.query}`)
    }, [state.query]);

    return (
        <PokemonContext.Provider value={{...state, handlePage, handleSearch}}>
            {children}
        </PokemonContext.Provider>
    )

};

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}