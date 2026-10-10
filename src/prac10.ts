import type { Todo } from "./types.js";

const todo: Todo = {
  name: "TypeScriptの勉強",
  priority: 1,
  isDone: false,
  deadline: new Date(2026, 9, 11, 9, 45),
};

// Reactの状態管理に適した
// todo とは参照が異なる updatedTodo を生成
const updatedTodo: Todo = {
    ...todo,
    name: "COBOLの勉強をする", // 変更
    priority: 3, // 変更
};

// todo と updatedTodo の参照が「異なること」を確認
console.log(todo !== updatedTodo); // true であれば OK