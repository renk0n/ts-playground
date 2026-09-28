const name: string = "TypeScriptの勉強";
const priority: number = 3;
console.log(`Todo 1 => ${name}（優先度:${priority}）`);

const todo = {
    name: "TypeScriptの勉強",
    priority: 3,

};

console.log(`Todo 1 => ${todo.name}(優先度:${todo.priority}) `);
console.log(JSON.stringify(todo, null, 2));
