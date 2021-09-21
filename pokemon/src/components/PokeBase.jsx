import React from 'react';
import {usePokemonContext} from '../util/context';
import placeholder from '../util/placeholder.png';
import {Link} from 'react-router-dom';

function PokeBase() {

    const {loading, results} = usePokemonContext();

    if(loading){
        <div className="loading">
            Loading...
        </div>
    }

    return (
      <div className="poke-base">
          {results.map((result, i) => {
              const {name, url} = result;

              return (
                  <Link to={url} key={i} className="pokemons">
                  <div className="pokemons-base">
                      <img src={placeholder} alt={name} />
                      <h3 className="name">{name}</h3>
                  </div>
                  </Link>
              )
          })}
      </div>
    )
}

export default PokeBase
