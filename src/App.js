import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    status: "in-progress",
    title: "Read the Book",
    description: "I should read the **whole** book",
    color: '#BD8D31',
    tasks: []
  },
  {
    id: 2,
    status: "todo",
    title: "Write some code",
    description: "Code along with some samples in the book. The complete source can be found at [GitHub](https://github.com/pro-react)",
    color: '#3A7E28',
    tasks: [
      {id: 1, name: "ContactList Example", done: true},
      {id: 2, name: "Kanban Example",done: false},
      {id: 3, name: "My own experiments", done: false}
    ]
  },
  {
    id: 3,
    status: "todo",
    title: "Learn more CSS Properties",
    description: "These CSS properties are used in this project and I need to better understand what they do",
    color: '#3A7E28',
    tasks: [
      {id: 1, name: "box-sizing: border-box", done: false},
      {id: 2, name: "white-space: nowrap (or normal)",done: false},
      {id: 3, name: "display: inline-block", done: false},
      {id: 4, name: "vertical-align: top", done: false},
      {id: 5, name: "overflow: auto", done: false},
      {id: 6, name: "Selector: .list:not(:last-child):after", done: false},
      {id: 7, name: "Selector: :before", done: false},
      {id: 8, name: "Selector: :first-child", done: false},
    ]
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kanban Board</h1>
        <KanbanBoard cards={cardsList} />
      </div>
    );
  }
}

export default App;

// class ListItem extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <li>
//         {this.props.quantity} x {this.props.children}
//       </li>
//     );
//   }
// }
