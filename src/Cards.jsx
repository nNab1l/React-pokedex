import React, { useState, useEffect } from "react";
import "./card.css";
import axios from "axios";

const Card = (props) => {
  const { pokemonName, cardTitle } = props;
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, sprites, stats, types,  weight, height } = pokemonData;

  if (cardTitle === "Image") {
    return (
      <div className="pokemon-card">
        <h2>{cardTitle}</h2>
        <h3>{name}</h3>
        <img src={sprites.front_default} alt={name} />
      </div>
    );
  }

  if (cardTitle === "Stats") {
    return (
      <div className="pokemon-card">
        <h2>{cardTitle}</h2>
        <h3>{name}</h3>
        <ul className="ulstats">
          {stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (cardTitle === "Info") {
    return (
      <div className="pokemon-card">
        <h2>{cardTitle}</h2>
        <h3>{name}</h3>
        <p>Weight: {weight} hectograms</p>
        <p>Height: {height} decimetres</p>
      </div>
    );
  }

  if (cardTitle === "Type") {
    return (
      <div className="pokemon-card">
        <h2>{cardTitle}</h2>
        <h3>{name}</h3>
        <p>Type(s): {types.map((type) => type.type.name).join(", ")}</p>
      </div>
    );
  }

  return null; 
};

export default Card;
