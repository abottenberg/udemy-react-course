import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onSubmit}>
          <label>Video search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
    );


};



// class SearchBar extends React.Component {
  // state = { term: '' };

  // onIputChange = (event) => {
  //   this.setState({ term: event.target.value })
  // };

  // onFormSubmit = event => {
  //   event.preventDefault();

  //   this.props.onFormSubmit(this.state.term);
  // };

  // render() {
  //   return (
  //     <div className="search-bar ui segment">
  //       <form className="ui form" onSubmit={this.onFormSubmit}>
  //         <label>Video search</label>
  //         <input
  //           type="text"
  //           value={this.state.term}
  //           onChange={this.onIputChange}
  //         />
  //       </form>
  //     </div>
  //   );
  // }
// }

export default SearchBar;
