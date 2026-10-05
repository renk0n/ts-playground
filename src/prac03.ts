const todo = {
  name: "TypeScriptの勉強",
  priority: 3,
  isDone: false,
  deadline: new Date(2026, 12, 31, 9, 45),
};

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timeZone);
console.log(todo.deadline);
console.log(typeof todo);