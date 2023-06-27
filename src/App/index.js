import { TodoProvider } from "../TodoContext";
import React from "react";
import { AppUI } from "./AppUI";
import { useStorageTodos } from "../TodoContext/useLocalStorage";
import { TodoContext } from "../TodoContext";
function App() {
  return (
  <TodoProvider>
      <AppUI/>
  </TodoProvider>
  );
}

export default App;
