import React, { Component } from "react";
import styled from "styled-components";
import { TextField, Button } from "../../components";
import { request } from "../../utils";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTitle: ""
    };
    this.getList();
  }

  getList() {
    request("/todos/list").then(({ todos }) => this.setState({ todos }));
  }

  addTodo() {
    const { newTitle } = this.state;
    request("/todos/add", { title: newTitle }).then(() => {
      this.setState({ newTitle: "" });
      this.getList();
    });
  }

  deleteTodo(id) {
    request("/todos/delete", { id }).then(() => {
      this.getList();
    });
  }

  render() {
    const { todos, newTitle } = this.state;
    return (
      <TodoListView>
        {todos.map(({ title, id }) => (
          <Todo>
            <TodoTitle>{title}</TodoTitle>
            <Button onClick={() => this.deleteTodo(id)} label={"Удалить"} />
          </Todo>
        ))}
        <NewTodo>
          <TextField
            value={newTitle}
            onChange={event => this.setState({ newTitle: event.target.value })}
            style={{ flex: 1 }}
            placeholder="Купить пива"
          />
          <Button onClick={() => this.addTodo()} label={"Добавить"} />
        </NewTodo>
      </TodoListView>
    );
  }
}

export default TodoList;

const Todo = styled.div`
  background-color: papayawhip;
  color: palevioletred;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
`;

const NewTodo = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoListView = styled.div`
  padding: 20px;
`;

const TodoTitle = styled.div`
  flex: 1;
`;
