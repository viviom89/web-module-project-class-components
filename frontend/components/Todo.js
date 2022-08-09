import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (<li>{this.props.todo.task} 
      { this.props.todo.completed ? <span>Show Completed</span> : <span></span>}</li>);
    }
  }