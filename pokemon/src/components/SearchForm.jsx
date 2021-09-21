import React from 'react';
import { usePokemonContext } from '../util/context';

function SearchForm() {
    const {handleSearch, query, next, prev, loading, handlePage} = usePokemonContext();

    return (
        <div className="search-container">
            <form onSubmit={(e) => e.preventDefault()} className="search-form">
                <div className="content-form">
                    <h2>Pokemon API</h2>
                    <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchForm
