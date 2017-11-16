import React from 'react';
const PokemonIndexItem = ({poke}) => (
  <div>
    <li>
      <img className="poke-pic" src={poke.image_url} />
      {poke.name}
    </li>
  </div>
);

export default PokemonIndexItem;
