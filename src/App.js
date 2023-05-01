import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    //we can have only root element
    //JSX
    <div className="App">
      <h1>Hi, I am a react App</h1>
      <p>This is really working</p>
      <Person name = "ishita" age="22"/>
      <Person name = "anand" age = "23"/>
      <Person name = "savvy" age = "45">My hobby: cooking</Person>
    </div>
  );

  //This is internal compilation of above JSX
  // return(
  //   React.createElement('div',{className : 'App'}, React.createElement('h1',null,'Nice cool'))
  // );
}

export default App;
