import type { Todo } from "../types.js";

export const completeTodo = (todo: Todo): Todo => {
  return { ...todo, isDone: true };
};

/*const todo: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2026, 9, 11, 9, 45),
};

console.log(todo === completeTodo(todo));
*/
