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

switchNameHandler = (newName) => {
  //console.log('was clicked')
  // Do not do this this.state.persons[0].name = 'Shruti Pabboju'
  this.setState({
    persons: [
    {
      name:newName,
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


  render() {
    const style = {
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>First Change</h1>
        <p>This is really working!</p>
        <button 
        style ={style}
        onClick={this.switchNameHandler.bind(this,'Maximilian')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Max!')} />
        <Person 
        name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         changed={this.nameChangeHandler}>Children props</Person>
      </div>
    );
    // return React.createElement(,,,,);
  }
}

export default App;
