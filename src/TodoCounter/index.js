import React from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";
function TodoCounter({}){
    const {totalTodos, completedTodos}=React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">Has compleatdo {completedTodos} de {totalTodos} TODOs</h2>
    );
}
export {TodoCounter}
 