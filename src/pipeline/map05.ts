import type { Todo } from "./types.js";
import { initTodos } from "./initTodos.js";

const targetId = "a003";
const newName = "電気電子回路1の課題";
const updatedTodos: Todo[] = initTodos.map((todo) => {
  return todo.id === targetId ? { ...todo, name: newName } : todo;
}); // ここを書き換える

/*if (todo.id === targetId) {
    return {...todo, name: newName};
}else{
    todo;
}
*/

console.log(JSON.stringify(updatedTodos, null, 2));
