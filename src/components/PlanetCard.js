import React from "react";
import './Card.css'

const PlanetCard = ({planet})=>{
    return(
        <div className="card">
            <h2>{planet.name}</h2>
            <p>Clima: {planet.climate}</p>
            <p>Tipo de terreno: {planet.terrain}</p>
            <p>Gravedad: {planet.gravity}</p>
            <p>Periodo Orbital: {planet.orbital_period} dias</p>
            <p>Periodo de rotacion: {planet.rotation_period} horas</p>
            <p>Superficie de agua: {planet.surface_water}%</p>
        </div>
    );
};

export default PlanetCard;