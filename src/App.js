import './App.css';
import { Modal, CloseButton, Toast, Card } from 'react-bootstrap';
import { useState } from 'react'
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "./actions/action"


const mapStateToProps = (store) => {
  return {
    todos: store.todoState.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    deleteTodo:  (payload) => dispatch(deleteTodo(payload)),
  }
}

function App({todos, addTodo, deleteTodo}) {
  const [todoInput, setTodoInput] = useState('')

  return (
    <div className="App">
      <Toast style={{ width: '50vw', background: 'white', margin: '60px auto 0px auto' }}>
        <Toast.Header closeButton={false}>
          <Modal.Title>Todo List</Modal.Title>
        </Toast.Header>
        <section className='add-todo-bar'>
          <input id="new-task" type="text" 
            value={todoInput} 
            onChange={(e) => setTodoInput(e.target.value)} 
            placeholder="Add something to do..." />
          <button className='add-btn'
            onClick={() => {
              if (todoInput === '') return
              addTodo(todoInput)
              setTodoInput('')
            }}>Add</button>
        </section>
        
        <Toast.Body style={{ textAlign: 'start'}}>
          {todos.map((todo, idx) => (
            <Card.Body key={idx} style={{ display: 'flex', justifyContent: 'space-between'}}>
              {todo.name}
              <CloseButton onClick={() => deleteTodo(todo.id)}/>
            </Card.Body>
          ))}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
