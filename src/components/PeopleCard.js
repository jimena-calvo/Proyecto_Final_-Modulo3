import React from "react";
import './Card.css';

const PeopleCard =({person})=>{
    return(
        <div className="card">
            <h2>{person.name}</h2>
            <p>Altura: {person.height}</p>
            <p>Peso: {person.mass}</p>
            <p>Año de nacimiento: {person.birth_year}</p>
            <p>Género: {person.gender}</p>
            <p>Color de ojos: {person.eye_color}</p>
        </div>
    );
};

export default PeopleCard;