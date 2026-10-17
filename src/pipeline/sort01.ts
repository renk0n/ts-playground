import { initTodos } from "./initTodos.js";

const sortedTodos = [...initTodos].sort((a, b) => {
  return a.priority - b.priority;
});

const sortedTodos2 = [...initTodos].sort((a, b) => {
  return b.priority - a.priority;
});

console.log(JSON.stringify(initTodos, null, 2));
console.log(JSON.stringify(sortedTodos, null, 2));
console.log(JSON.stringify(sortedTodos2, null, 2));
