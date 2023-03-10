import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ConsumigApi } from "../Components/ConsumigApi";
import { Cards } from "../Components/Cards";

export const Index = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const estado = ConsumigApi(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (search) {
      getPokemon();
    }
  }, [search]);

  const getPokemon = () => {
    console.log(search);
    console.log(data.results);
    const x = data.results.filter((r) => r.name === search);
    console.log(x);
    if (x.length === 1) {
      setPokemon(x[0]);
    }
  };

  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar"
      />
      {cargando ? (
        <Spinner animation="grow" variant="dark" />
      ) : (
        <div>
          <>
            {pokemon ? (
              <Cards results={[pokemon]} />
            ) : (
              <Cards results={data.results} />
            )}
            <div className="container m-auto">
              <button
                onClick={() => setUrl(data.previous)}
                className="m-2 btn btn-dark"
              >
                Anterior
              </button>
              <button
                onClick={() => setUrl(data.next)}
                className="btn btn-dark"
              >
                Siguiente
              </button>
            </div>
          </>
        </div>
      )}
    </div>
  );
};
