import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import TodoList from "../../components/TodoList";
import { Creators as TodosActions } from "../../store/ducks/todos";

const mockStore = createStore();

const INITIAL_STATE = {
  todos: { data: ["Make coffee", "Study React"] }
};

const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(2);
});

it("shoul be able to add a new todo", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  wrapper.find("TodoList").setState({ newTodo: "New Todo" });
  wrapper.find("button").simulate("click");

  /* expect(store.getState().todos.data).toEqual([
    "Make coffee",
    "Study React",
    "New Todo"
  ]); */
  expect(store.getActions()).toContainEqual(TodosActions.addTodo("New Todo"));
});
