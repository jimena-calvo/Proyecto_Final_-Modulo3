import React from "react";
import PeopleCard from './PeopleCard';
import PlanetCard from './PlanetCard';
import StarshipCard from './StarshipCard';
import './StarwarsList.css';

const StarwarsList = ({data, type})=>{
    if(type === 'people'){
        return(
            <div className="data-list">
                {data.map((item)=> (
                    <PeopleCard key={item.id} person={item}/>
                ))}
            </div>
        );
    } else if(type === 'starships') {
        return(
            <div className="data-list">
                {data.map((item)=> (
                    <StarshipCard key={item.id} starship={item}/>
                ))}
            </div>
        );
    } else {
        return(
            <div className="data-list">
                {data.map((item)=> (
                    <PlanetCard key={item.id} planet={item}/>
                ))}
            </div>
        );
    }
}

export default StarwarsList;