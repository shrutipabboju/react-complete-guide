import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>First Change</h1>
        <p>This is really working!</p>
        <Person name="Shruti" age="23" />
        <Person name="Sample" age="22">Children props</Person>
      </div>
    );
    // return React.createElement(,,,,);
  }
}

export default App;
