import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Index } from "../Pages/Index";
import { Team } from "../Pages/Team";
import { AboutPokemon } from "../Pages/AboutPokemon";
import { Suggestions } from "../Pages/Suggestions";

export const Nav = () => {
  return (
    <BrowserRouter >
      <nav className="py-4 text-center">
        <Link className="mx-2" to="/">
          Pokedex
        </Link>
        <Link className="mx-2" to="/Historia">
          Historia
        </Link>
        <Link className="mx-2" to="/Equipo">
          Equipo
        </Link>
        <Link className="mx-2" to="/Sugerencias">
          Sugerencias
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/Historia" element={<AboutPokemon />}></Route>
        <Route path="/Equipo" element={<Team />}></Route>
        <Route path="/Sugerencias" element={<Suggestions />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
