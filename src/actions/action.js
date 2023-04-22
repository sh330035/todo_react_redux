import { ADD_TODO, DELETE_TODO } from "./actionType";

//action creater

export function addTodo(name) {
  return {
    type: ADD_TODO,
    payload: {
      name,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}