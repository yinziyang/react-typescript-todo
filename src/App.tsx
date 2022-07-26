import React from "react";
import TodoList from "./components/TodoList";

function App(): React.ReactElement {
  return <TodoList></TodoList>;
}

export default React.memo(App);
