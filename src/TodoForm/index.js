import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoform.css"

function TodoForm(){
    const [newTodoValue, setNewTodoValue]= React.useState('')
    const {
       addTodo,
       setOpenModal, 
    }= React.useContext(TodoContext)
    const onCancel=()=>{
           setOpenModal(false) 
    } 
    const onChange=(event)=>{
        setNewTodoValue(event.target.value)
 }
    const onSubmit=(event)=>{
        event.preventDefault()  
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    
    return(
       
        <form onSubmit={onSubmit}>
            <label>Escribe Tu Nuevo To Do</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Hacer Alguito :3"
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-cancelButton" 
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                className="TodoForm-button TodoForm-button-add "
                type="submit">
                    Añadir
                </button>
            </div>
            
        </form>
    )
}
export {TodoForm}