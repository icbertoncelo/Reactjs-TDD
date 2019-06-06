import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "../store/ducks/todos";

class TodoList extends Component {
  state = {
    newTodo: ""
  };

  handleInputchange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    const { newTodo } = this.state;
    const { addTodo } = this.props;

    addTodo(newTodo);
  };

  render() {
    const { newTodo } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <input
          onChange={this.handleInputchange}
          value={newTodo}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
