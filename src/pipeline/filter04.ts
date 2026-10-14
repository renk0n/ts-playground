import type { Todo } from "./types.js";
import { initTodos } from "./initTodos.js";

const today = new Date(2026, 9, 22);
const overTodos: Todo[] = initTodos.filter((todo) => {
  if (todo.deadline === null) {
    return false;
  }
  return today.getTime() > todo.deadline.getTime() && !todo.isDone;
});
console.log("期日を過ぎている未完了Todoの一覧");
console.log(JSON.stringify(overTodos, null, 2));
