import type { Todo } from "./types.js";
import { printTodo } from "./utils/printTodo.js";
import assert from "assert";

const todo: Todo = {
  name: "Learn Typescript",
  priority: 3,
  isDone: false,
  deadline: new Date(2026, 9, 11, 9, 45),
};

const updatedTodo = {
  ...todo,
  isDone: true,
  deadline: new Date(2026, 9, 30),
};

assert.notEqual(todo, updatedTodo);

printTodo(updatedTodo);
