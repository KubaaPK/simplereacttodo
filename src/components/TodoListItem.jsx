import React from 'react';

export default class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };

        this.onEditClick = this.onEditClick.bind(this);
        this.renderActionSection = this.renderActionSection.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
        this.renderTaskSection = this.renderTaskSection.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.Todos.task;
        const newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return (
                <td>
                    <button type="button" 
                            onClick={ this.onSaveClick }>
                            Save
                     </button>
                    <button type="button" 
                            onClick = { this.onCancelClick }>
                            Cancel
                    </button>
                </td>
            );
        } else {
            return(
                <td>
                    <button type="button" 
                            onClick = { this.onEditClick }>
                            Edit
                    </button>
                    <button type="button"
                            onClick={ this.props.deleteTask.bind(this, this.props.Todos.task) }>
                            Delete
                    </button> 
                </td>
            );
        }
    }

    renderTaskSection() {

        const { task, isCompleted } = this.props.Todos;        
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }
        
        if(this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={ this.onSaveClick }>
                        <input  type="text" 
                                ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td 
                style={ taskStyle }
                onClick={ this.props.toggleTask.bind(this, task) }>
                { task }
            </td>
        );
    }


    render() {
        return (
            <tbody>
                <tr>
                    { this.renderTaskSection() }
                    { this.renderActionSection() }
                </tr>
            </tbody>
        )
    }
}