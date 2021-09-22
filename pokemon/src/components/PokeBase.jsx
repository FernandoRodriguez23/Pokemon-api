import React from 'react';
import {usePokemonContext} from '../util/context';
import placeholder from '../util/placeholder.png';

function PokeBase() {

    const {loading, results} = usePokemonContext();

    if(loading){
        <div className="loading">
            Loading...
        </div>
    }

    //When API hasnt searched
    return (
        //have it fade out once you actully search a pokemon,
        // find an static looking img for placeholder
      <div className="pokemon-dex">
          <div className="dex">
              <div className="dex-left">
                    <h2 className="name">Name</h2>
                    <img src={placeholder} alt='placeholder' className="poke-img" />
                    <h3 className="discription">Base Exp | Weight</h3>
                    <h3 className="discriptionPlus">Order | Height</h3>
                    <div className="btns">
                        {/* Make into triangles using mixins */}
                        <button className="prev"></button>
                        <button className="next"></button>
                    </div>
              </div>
          </div>
      </div>
    )

    //when API does search
    // return (
    //     <div className="pokemon-dex">
    //       {results.map((result) => {
    //         const {
    //           name,
    //           order,
    //           height,
    //           weight,
    //           moves,
    //           types,
    //           stats,
    //           base_experience: base,
    //           id,
    //           location_area_encounters: encounters,
    //           abilities,
    //           sprites
    //         } = result;
    //         console.log(result);
    
    //         //pathname
    
    //         const {front_default} = sprites;
    
    //         <div className="dex">
    //             <div className="dex-left">
    //                 <h3 className="title">{name}</h3>
    //                 {/* <img src={img} alt={name} /> */}
    //                 <h4 className="discription">{base} | {weight}</h4>
    //             </div>
    //         </div>  
    //       })}
    //     </div>
    //   );
}

export default PokeBase
