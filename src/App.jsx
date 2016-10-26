import React from 'react';

import _ from 'lodash';

import TodoList from './components/TodoList.jsx';
import CreateTodo from './components/CreateTodo';

const todos = [
    {
        task: 'task1',
        isCompleted: false
    },
    {
        task: 'task2',
        isCompleted: true
    }
]



export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos
        }

        this.createTask = this.createTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }



  createTask(task) {
      this.state.todos.push({
          task,
          isCompleted: false
      });
      this.setState({todos: this.state.todos});
  }  

  toggleTask(task) {
       const foundTodo = _.find(this.state.todos, todo => todo.task === task);
       foundTodo.isCompleted = !foundTodo.isCompleted;
       this.setState({todos: this.state.todos});  
  }


  saveTask(oldTask, newTask) {
      const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);

      foundTodo.task = newTask;
      this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete) {
      _.remove(this.state.todos, todo => todo.task === taskToDelete);
      this.setState({todos: this.state.todos});
  }


  render() {
        return (
            <div>
               <h1>React todo App</h1>
               <CreateTodo createTask={this.createTask} Todos={this.state.todos}/>
               <TodoList todos={this.state.todos} toggleTask={this.toggleTask} saveTask={this.saveTask} deleteTask={this.deleteTask}/>
            </div>
        )
    }
}