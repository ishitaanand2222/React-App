import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
  state = {
    persons : [
      {name: "Ishita", age: 28},
      {name: "Anand", age:23},
      {name: "Savvy", age:45}
    ]
  };
  
  switchNameHandler = () =>{
    this.setState({
      persons : [
        {name: "Ishita Anand", age: 28},
        {name: "Ishu", age:23},
        {name: "Savvy", age:47}
      ]
    })
  }
  render() {
    //we can have only root element
    //JSX
    return(
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working</p>
        <button onClick = {this.switchNameHandler} >Switch Name</button>
        <Person name = {this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}>My hobby: cooking</Person>
      </div>
    );
  };


  //This is internal compilation of above JSX
  // return(
  //   React.createElement('div',{className : 'App'}, React.createElement('h1',null,'Nice cool'))
  // );
}

export default App;
