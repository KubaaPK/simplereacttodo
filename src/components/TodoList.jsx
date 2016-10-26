import React from 'react';
import _ from 'lodash';

import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';


export default class TodoList extends React.Component {

  constructor(props) {
      super(props);      
      this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
      return this.props.todos.map((todos, i) => 
        <TodoListItem  
            key = { i } 
            Todos = { todos } 
            toggleTask = { this.props.toggleTask } 
            saveTask={ this.props.saveTask }
            deleteTask={ this.props.deleteTask }
        />)
  }

  render() {
      return (
          <table>
              <TodoListHeader />
              { this.renderItems() }
          </table>
      );
  }
}
