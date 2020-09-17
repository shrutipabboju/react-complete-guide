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
  ],
  showPersons: false
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
    {
      name:'Shruti',
      age:23
    },
    {
      name: event.target.value,
      age:22
    }
  ]
}
)
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age} />
        })}
         </div>
      )
    }

    return (
      <div className="App">
        <h1>First Change</h1>
        <p>This is really working!</p>
        <button 
        style ={style}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement(,,,,);
  }
}

export default App;
