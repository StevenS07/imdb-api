# Projekt wyszukiwarki filmów i seriali imdb api

Aplikacja pobiera od użytkownika nazwę filmu/serialu i wyświetla do 10 tytułów wraz z plakatem oraz linkiem do strony imdb danego filmu.

Aplikacja składa się z kilku klas i bazuje na api.

App.js

    class App extends React.Component {
      state = { movies: []  };
     //Zapytanie do api
 
 
    onSearchSubmit = (term) => {
      axios
        .get("https://imdb-api.com/en/API/Search/k_bn3twrog/"+term , { params: {

          query: term

        }})
      //zwrócenie resultadów i przekaznie danych do stałej movies  
        .then((result) => {
         this.setState({ movies: result.data.results });
        });

    };
 
    // zwórcene danych z Scharbar.js i Movies.js
      render(){
      return (
        <div className="ui container" >
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          <Movies movies={this.state.movies} />
        </div>
      );
      }
    }

SeachrBar.js

    class SearchBar extends React.Component {
      state = { term: '' };
      //przekazanie tekstu do zmieneje zatwierdzeniu eneterem 
      onInputChange = (event) => {
        this.setState({ term: event.target.value });
      };

      onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
      };

     // zwrócenie  inputa do podania tekstu
      render() {
        return (
          <div id="szukajtlo" className="ui segment">
            <form  className="ui form" onSubmit={this.onFormSubmit}>
              <div  className="field">
                <p id="szukajtlo">Jaki film, serial szukasz ?</p>
                <input id="szukaj"
                  type="text"
                  onChange={this.onInputChange}
                  value={this.state.term}
                />
              </div>
            </form>
          </div>
        );
      }
    }

Movies.js
    
    //stworzenie listy i przekazanie do nich danych z movies[]
    const MoviesList = (props) => {
        const list = props.movies.map((movie) => {
          //wypisanie danych pobranych z api 
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
