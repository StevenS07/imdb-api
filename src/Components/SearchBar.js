import React from 'react';
import '../App.css';
class SearchBar extends React.Component {
  state = { term: '' };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
 
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

 
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
 
export default SearchBar;