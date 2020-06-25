import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {

  onTermSubmit = term => {
    console.log(term)
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar OnFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
