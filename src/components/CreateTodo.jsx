import React from 'react';
import _ from 'lodash';

export default class CreateTodo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            error: null
        };

        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if(validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = "";
    }

    validateInput(task) {
        if(!task) {
            return 'Please enter the task.';

        } else if(_.find(this.props.Todos, todo => todo.task === task)) {
            this.refs.createInput.value = '';
            return 'Task already exists.';

        } else {
            return null;
        }
    }

    renderError() {
        if(!this.state.error) {
            return null;
        } 
        return(
            <div style={{ color: 'red' }}>
                { this.state.error }
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={ this.handleCreate }>
                <input  type="text" 
                        placeholder="What do You want to do?" 
                        ref="createInput" />
                <button type="button" 
                        onClick={ this.handleCreate }>
                    Create
                </button>
                { this.renderError() }
            </form>
        )
    }
}