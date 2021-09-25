import React, {useReducer, useContext, useEffect, useState} from 'react';
import { reducer } from "./reducer";
import useFetch from './useFetch';


const initialState = {
    loading: true,
    results: [],
    next: '',
    prev: ''
}

const PokemonContext = React.createContext();

export const PokemonProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [search, setSearch] = useState("")
    useFetch(`/${search}`)

    
    const handleSearch = (query) => {
        dispatch({type: 'HANDLE_SEARCH', payload: query});
    }

    const handlePage = (value) => {
        dispatch({type: 'HANDLE_PAGE', payload: value})
    }


    //another useEffect to search when it is clicked on or searched

 

    return (
        <PokemonContext.Provider value={{...state, handlePage, handleSearch, search, setSearch}}>
            {children}
        </PokemonContext.Provider>
    )

};

export const usePokemonContext = () => {
    return useContext(PokemonContext)
}