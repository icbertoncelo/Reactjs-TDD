import todosReducer, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("New Todo"));

    expect(state.data[0]).toBe("New Todo");
  });

  it("shoud be able to complete todos", () => {
    const todos = ["Make Coffee"];

    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("Make Coffee")
    );

    expect(state.data.length).toBe(0);
  });
});
