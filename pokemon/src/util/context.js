import React, {useReducer, useContext, useEffect, useState} from 'react';
import { reducer } from "./reducer";


const initialState = {
    loading: true,
    results: [],
    next: '',
    prev: '',
    query: 'charizard'
}

const PokemonContext = React.createContext();

export const PokemonProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    
    const handleSearch = (query) => {
        dispatch({type: 'HANDLE_SEARCH', payload: query});
    }

    const handlePage = (value) => {
        dispatch({type: 'HANDLE_PAGE', payload: value})
    }

    //another useEffect to search when it is clicked on or searched

 

    return (
        <PokemonContext.Provider value={{...state, handlePage, handleSearch}}>
            {children}
        </PokemonContext.Provider>
    )

};

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}