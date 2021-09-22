import React from "react";
import { usePokemonContext } from "../util/context";

function PokeSingle() {
  const { loading, results, fetchPokemon} = usePokemonContext();
  fetchPokemon(window.location.pathname);

  if (loading) {
    <div className="loading">Loading...</div>;
  }

  
}

export default PokeSingle;
