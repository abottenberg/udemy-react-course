import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

const KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {

  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term,
        require: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
