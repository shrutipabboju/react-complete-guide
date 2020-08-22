import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
state = {
  persons: [
    {
      name:'Shruti',
      age:23
    },
    {
      name: 'Sample',
      age:29
    }
  ]
}

switchNameHandler = () => {
  //console.log('was clicked')
  // Do not do this this.state.persons[0].name = 'Shruti Pabboju'
  this.setState({
    persons: [
    {
      name:'Shruti Pabboju',
      age:23
    },
    {
      name: 'Sample',
      age:22
    }
  ]
}
)
}

  render() {
    return (
      <div className="App">
        <h1>First Change</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler} />
        <Person 
        name={this.state.persons[1].name}
         age={this.state.persons[1].age}>Children props</Person>
      </div>
    );
    // return React.createElement(,,,,);
  }
}

export default App;
