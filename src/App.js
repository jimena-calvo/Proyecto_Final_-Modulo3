import React, {useEffect, useState} from 'react';
import StarwarsList from './components/StarwarsList';
import './App.css';

function App() {
  const [dataStarWars, setDataStarWars] = useState([]);
  const [type, setType] = useState('people');

  const API_URL = 'https://swapi.dev/api/';

  const mapPeople = async (dataReceived)=>{
    const starWarsData = dataReceived.results.map((item, index)=>{
        return{
          id: index,
          name: item.name,
          height: item.height,
          mass: item.mass,
          birth_year: item.birth_year,
          gender: item.gender,
          eye_color: item.eye_color,
        };
      }
    );
    setDataStarWars(starWarsData);
  };

  const mapStarships = async (dataReceived)=>{
    const starWarsData = dataReceived.results.map((item, index)=>{
        return{
          id: index,
          name: item.name,
          model: item.model,
          starship_class: item.starship_class,
          crew: item.crew,
          passengers: item.passengers,
          cargo_capacity: item.cargo_capacity,
          cost_in_credits: item.cost_in_credits,
          manufacturer: item.manufacturer,
        };
      }
    );
    setDataStarWars(starWarsData);
  };

  const mapPlanets = async (dataReceived)=>{
    const starWarsData = dataReceived.results.map((item, index)=>{
        return{
          id: index,
          name: item.name,
          climate: item.climate,
          terrain: item.terrain,
          gravity: item.gravity,
          orbital_period: item.orbital_period,
          rotation_period: item.rotation_period,
          surface_water: item.surface_water,
        };
      }
    );
    setDataStarWars(starWarsData);
  };

  useEffect(()=>{
    const fetchData = async ()=> {
      const response = await fetch(API_URL+type);
      const data = await response.json();

      switch (type) {
        case 'people':
          mapPeople(data);
          break;
        
        case 'starships':
          mapStarships(data);
        break;

        case 'planets':
          mapPlanets(data);
        break;
      
        default:
          break;
      }
    }

    fetchData();
  },[type]);

  return (
    <div className="app">
      <div className='header'>
        <h1>STARWARS enciclopedia en ingleh</h1>
        <div className="filter-buttons">
          <button onClick={()=> setType('people')}>Personajes</button>
          <button onClick={()=> setType('planets')}>Planetas</button>
          <button onClick={()=> setType('starships')}>Naves</button>
        </div>
      </div>
      <StarwarsList data={dataStarWars} type={type}/>
    </div>
  );
}

export default App;
