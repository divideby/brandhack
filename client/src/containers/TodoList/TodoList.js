import React, { Component } from "react";
import styled from "styled-components";
import { TextField, Button } from "../../components";

class TodoList extends Component {
  constructor(props) {
    super(props);
    fetch("http://localhost:3000/todos")
      .then(response => response.json())
      .then(result => console.log("result", result));
  }

  render() {
    const todos = [1, 2, 3, 4, 5];
    return (
      <TodoListView>
        {todos.map(todo => (
          <Todo>
            <TodoTitle>{todo}</TodoTitle>
            <Button label={"Удалить"} />
          </Todo>
        ))}
        <NewTodo>
          <TextField style={{ flex: 1 }} placeholder="Купить пива" />
          <Button label={"Добавить"} />
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
