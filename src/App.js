import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the **whole** book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with some samples in the book. The complete source can be found at [GitHub](https://github.com/pro-react)",
    status: "todo",
    tasks: [
      {id: 1, name: "ContactList Example", done: true},
      {id: 2, name: "Kanban Example",done: false},
      {id: 3, name: "My own experiments", done: false}
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
