import React, { useState } from 'react'; //import useState instead of Componenet
import './App.css';
import Person from'./Person/Person';

const app = props => { // does not need render
  const [personsState, setPersonsState] = useState({ // always returns exactly two elements
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
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    //console.log('was clicked')
    // Do not do this personsState.persons[0].name = 'Shruti Pabboju'
    setPersonsState({ 
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
  });
  };

    return (
      <div className="App">
        <h1>First Change</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Children props</Person>
      </div>
    );
    // return React.createElement(,,,,);
}

export default app;

