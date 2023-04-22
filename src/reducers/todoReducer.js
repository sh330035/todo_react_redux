import { ADD_TODO, DELETE_TODO } from "../actions/actionType";

let todoId = 0;

const initialState = {
  todos: []
};


function todosReducer(state = initialState, action){
    switch (action.type) {
        case ADD_TODO: {
          return {
            ...state, //保存其他 state
            todos: [
              //去改你要改的 state
              ...state.todos,
              {
                id: todoId++,
                name: action.payload.name,
              },
            ],
          };
        }
    
        case DELETE_TODO: {
          return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload.id),
          };
        }
    
        default: {
          return state;
        }
    }
}

export default todosReducer;