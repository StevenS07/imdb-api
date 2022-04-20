import React from 'react';
import '../Movies.css';
const MoviesList = (props) => {
    const list = props.movies.map((movie) => {
      return (
        
        <div class="body" >
        <p>{movie.title}  </p>
        <div class="zdjtlo">
        <img   
        src={movie.image} 
      />
      <div class="link"><a href={`https://www.imdb.com/title/${movie.id}`} target="_blank">Go to site</a></div>
      </div>
      </div>
      
      );
    });
  
    return <div>{list}</div>;
  };
  
  export default MoviesList;