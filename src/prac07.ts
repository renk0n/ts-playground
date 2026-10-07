import type {Todo} from "./types.js";
import {printTodo} from "./utils/printTodo.js"

const todo1: Todo = {
    name: "Typescriptの勉強",
    priority: 3,
    isDone: false,
    deadline: new Date(2026, 9, 11, 9, 45),
};

const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2026, 9, 10, 16, 0),
};

printTodo(todo1);
printTodo(todo2);

export type Nouryoku = {
    name: string;
    tuyosa: number;
    hayasa: number;
    sukiru: string;
};

export const nouRyoku = (nouryoku: Nouryoku): void => {
    const status = 
        `こいつの名前は${nouryoku.name}で強さは${nouryoku.tuyosa}` +
        `そして，速さは${nouryoku.hayasa}かつスキルが${nouryoku.sukiru}だ`;
        console.log(status);
};

/*
const greet = (user: User): void => {
    console.log(`こんにちは，${user.name}`)
};
*/

/*
const greet = (user: User): void => {
    const {name, age} = user;
    const console.log(`こんにちは，${name}さん．${age}歳ですね．`);
};
*/

/*
const greet = ({name, age}: User): void => {
    console.log(`こんにちは，${name}さん，${age}歳ですね．`);
};
*/