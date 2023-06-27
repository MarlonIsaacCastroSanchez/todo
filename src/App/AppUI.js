import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList"
import { TodoContext } from "../TodoContext/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";
import "./AppUI.css"
function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo , openModal, setOpenModal } = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {error && <p>Hubo un errorsito bonito 💀</p>}
          {loading && <p className="cargando">Estamos Cargando :P</p>}
          {(!loading && !searchedTodos.length) && <p className="PrimerTodo">Crea tu primero todo 😉</p>}

          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
            {!!openModal &&(
              <Modal>
                <TodoForm/>
              </Modal>

            )}
      <CreateTodoButton 
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}
export { AppUI }