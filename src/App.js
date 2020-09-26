import React, { Component } from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {
state = {
  persons: [
    {
      id:1,
      name:'Shruti',
      age:23
    },
    {
      id:2,
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

nameChangeHandler = (event, id) => {
//const person = this.state.persons.find();
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;
});

const person = {
    ...this.state.persons[personIndex]
};

//const person = Object.assign({}, this.state.persons[personIndex])

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

this.setState({ persons: persons})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
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
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
         </div>
      )

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>First Change</h1>
        <p>This is really working!</p>
        <button 
        style ={style}
        onClick={this.togglePersonsHandler}>Toggle Name</button>
        {persons}
      </div>
    );
    // return React.createElement(,,,,);
  }
}

export default App;
