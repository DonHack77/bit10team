import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ConsumigApi } from "../Components/ConsumigApi";
import { Cards } from "../Components/Cards";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Buscar"
      />
    </div>
  );
};

const Pagination = ({ previousUrl, nextUrl, onPreviousClick, onNextClick }) => {
  return (
    <div className="container m-auto">
      <button onClick={onPreviousClick} className="m-2 btn btn-dark">
        Anterior
      </button>
      <button onClick={onNextClick} className="btn btn-dark">
        Siguiente
      </button>
    </div>
  );
};

const PokemonList = ({ data, search, onPokemonSelected }) => {
  const filteredData = data.results.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return <Cards results={filteredData} onPokemonSelected={onPokemonSelected} />;
};

export const Index = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const { cargando, data } = ConsumigApi(url);
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    setSelectedPokemon(null);
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePreviousClick = () => {
    setUrl(data.previous);
  };

  const handleNextClick = () => {
    setUrl(data.next);
  };

  const handlePokemonSelected = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <SearchBar value={search} onChange={handleSearchChange} />
      {cargando ? (
        <Spinner animation="grow" variant="dark" />
      ) : (
        <>
          {selectedPokemon ? (
            <Cards results={[selectedPokemon]} />
          ) : (
            <PokemonList
              data={data}
              search={search}
              onPokemonSelected={handlePokemonSelected}
            />
          )}
          <Pagination
            previousUrl={data.previous}
            nextUrl={data.next}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
          />
        </>
      )}
    </div>
  );
};
