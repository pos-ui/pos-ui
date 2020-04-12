import React,{Component,useEffect,useState} from 'react';
// import logo from './logo.svg';
import Recepi from './Recepies'
import './App.css';

const App = () => {
  const APP_ID = "40dca233";
  const API_KEY = "5ba2168e5189b408472e4c47871c8563";
  const [recipies , setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  },[query]);

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getRecipies = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    // console.log(data.hits);
    setRecipies(data.hits);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type='text' value={search} onChange={updateSearch}></input>
      <button className="search-button" type='submit'>SEARCH</button>
      </form>
      <div className="Recepis">
      {recipies.map(recipe => (
        <Recepi title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                key={recipe.recipe.label}
                ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
