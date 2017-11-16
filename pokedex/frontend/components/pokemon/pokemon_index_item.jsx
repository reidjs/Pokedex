import React from 'react';
import { Link } from 'react-router-dom';
const PokemonIndexItem = ({pokemon}) => (
  <div>
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img className="poke-pic" src={pokemon.image_url} />
        {pokemon.name}
      </Link>
    </li>
  </div>
);

export default PokemonIndexItem;
