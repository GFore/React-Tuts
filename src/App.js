import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the who book",
    status: "in-progress",
    tasks: []
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello ord</h1>
        <ul>
          <ListItem quantity="1">Bread</ListItem>
          <ListItem quantity="6">Eggs</ListItem>
          <ListItem quantity="2">Milk</ListItem>
        </ul>

      </div>
    );
  }
}

class ListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <li>
        {this.props.quantity} x {this.props.children}
      </li>
    );
  }
}

export default App;


// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a> 
// </header>
