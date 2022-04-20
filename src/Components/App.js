
import '../App.css';
import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import Movies from './Movies';
class App extends React.Component {
  state = { movies: []  };
 
  onSearchSubmit = (term) => {
    axios
      .get("https://imdb-api.com/en/API/Search/k_bn3twrog/"+term , { params: {

        query: term

      }})
      
      .then((result) => {
       this.setState({ movies: result.data.results });
      });
      
  };
 

  render(){
  return (
    <div className="ui container" >
      <SearchBar onSearchSubmit={this.onSearchSubmit} />
      <Movies movies={this.state.movies} />
    </div>
  );
  }
}

export default App;
