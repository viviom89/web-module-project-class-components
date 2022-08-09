import React from 'react'
import TodoList from './TodoList';
//import TodoForm from './TodoForm';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Walk the dog',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Learn React',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Have fun',
          id: 1528817084359,
          completed: false
        }
      ]
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
      <h1>Todos:</h1>

      <TodoList todos={todos}/>
      {/* <TodoForm /> */}

      <button>Hide Completed</button>
      </div>
    )
  }
}
