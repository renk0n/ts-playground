import type { Todo } from "./types.js";

const todo: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2026, 9, 11, 9, 45),
};

const updatedTodo: Todo = {
  ...todo,
  isDone: true,
};

console.log(JSON.stringify(updatedTodo, null, 2));
