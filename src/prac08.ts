import type {Todo} from "./types.js";

const todo1: Todo = {
    name: "Typescriptの勉強",
    priority: 2,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

const state = todo1.isDone ? "【済】" : "【未】";
console.log(state, todo1.name);