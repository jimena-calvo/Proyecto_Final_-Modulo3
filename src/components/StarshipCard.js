import React from "react";
import './Card.css';

const StarshipCard = ({starship}) =>{
    return(
        <div className="card">
            <h2>{starship.name}</h2>
            <p>Modelo: {starship.model}</p>
            <p>Tipo de nave: {starship.starship_class}</p>
            <p>Personal necesario: {starship.crew} personas</p>
            <p>Capacidad de pasajeros: {starship.passengers} personas</p>
            <p>Capacidad de carga: {starship.cargo_capacity}</p>
            <p>Costo en creditos: {starship.cost_in_credits}</p>
            <p>Fabricante: {starship.manufacturer}</p>
        </div>
    );
};

export default StarshipCard;