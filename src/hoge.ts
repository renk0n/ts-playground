import type { Todo } from "./pipeline/types.js";
import { initTodos } from "./pipeline/initTodos.js";

const targetId = "a003";
const newName = "電気電子回路1の課題";
const updatedTodos: Todo[] = initTodos.map((todo: Todo): Todo => {
  return todo.id === targetId ? { ...todo, name: newName } : todo;
}); // ここを書き換える

console.log(JSON.stringify(updatedTodos, null, 2));

const updatetodo = (todos: Todo[], id: string, newname: string): Todo[] => {
  const updatetodos: Todo[] = todos.map((todo) => {
    return todo.id === id ? { ...todo, name: newname } : todo;
  });
  return updatetodos;
};
