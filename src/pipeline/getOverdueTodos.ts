import type { Todo } from "./types.js";

export const getOverdueTodos = (todos: Todo[], now: Date): Todo[] => {
  return todos.filter((todo) => {
    return (
      !todo.isDone &&
      todo.deadline !== null &&
      todo.deadline.getTime() < now.getTime()
    );
  });
};
