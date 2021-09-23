import React from "react";
import { usePokemonContext } from "../util/context";
import placeholder from "../util/placeholder.png";
import useFetch from "../util/useFetch";
import { Link } from "react-router-dom";

function PokeBase() {
  const { loading, data } = useFetch(`${window.location.pathname}`);

  console.log(data);

  if (loading) {
    <div className="loading">Loading...</div>;
  }

  //When API hasnt searched
  // return (
  //     //have it fade out once you actully search a pokemon,
  //     // find an static looking img for placeholder
  //   <div className="pokemon-dex">
  //       <div className="dex">
  //           <div className="dex-left">
  //                 <h2 className="name">Name</h2>
  //                 <img src={placeholder} alt='placeholder' className="poke-img" />
  //                 <h3 className="discription">Base Exp | Weight</h3>
  //                 <h3 className="discriptionPlus">Order | Height</h3>
  //                 <div className="btn-move">
  //                     {/* Make into triangles using mixins */}
  //                     <button className="prev"></button>
  //                     <button className="next"></button>
  //                 </div>
  //           </div>

  //           {/* <div className="dex-right">
  //               <h2 className="title">Info</h2>
  //               <div className="type">
  //                   make separete classes for when it
  //                   is one type to have a differnt class
  //                   Have a seperate destruturing here and
  //                   when it is one type to the above
  //                   <h2 className="types">Grass</h2>
  //                   <ul className='stats'>
  //                     <li className="stat">HP</li>
  //                     <li className="stat">Attack</li>
  //                     <li className="stat">Defense</li>
  //                     <li className="stat">Sp. Attack</li>
  //                     <li className="stat">Sp. Defense</li>
  //                     <li className="stat">Speed</li>
  //                 </ul>
  //               </div>
  //           </div> */}

  //       </div>
  //   </div>
  // )

  //when API does search

  const {
    name,
    order,
    height,
    weight,
    moves,
    types,
    stats,
    base_experience: base,
    id,
    location_area_encounters: encounters,
    abilities,
    sprites,
  } = data;
//   const {front_default} = sprit
console.log(sprites?.front_default);

    //   setTimeout(() => {
    //     console.log(sprites.front_default);
    //   }, 0);

    // const {front_default} = sprites;

    //Make a function to fix weigth and height to connon 

    // const {type} = types;
    console.log(types?.type?.name);
    //figuer out how to get the name of the type

  return (
    <div className="pokemon-dex" key={id}>
      <div className="dex">
        <div className="dex-left">
          <h2 className="name">{name}</h2>
          <img src={sprites?.front_default} alt={name} className="poke-img" />
          <h4 className="discription">
            {base}exp | {weight}kg
          </h4>
          <h4 className="discriptionPlus">
            #{order} | {height}m
          </h4>
          <div className="btn-move">
            <button className="prev"></button>
            <button className="next"></button>
          </div>
        </div>

        <div className="dex-right">
          <h2 className="title">Info</h2>
          <div className="types">
                
          </div>
        </div>
      </div>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default PokeBase;
