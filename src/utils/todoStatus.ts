import { isModuleNamespaceObject } from "util/types";
import type {Todo} from "../types.js";

export const isOverdue = (todo: Todo, now: Date): boolean => {
    const {isDone, deadline} = todo;
    if (isDone){
        return false;
    }
    return deadline.getTime() < now.getTime();
};


export const getTodoStatus = (todo: Todo, now: Date) => {
    if (todo.isDone) {
        return `【済】${todo.name}`;
    }
    const diff = now.getTime() - todo.deadline.getTime();
    const overtime = (Math.abs(diff) / (60 * 60 * 1000)).toFixed(1);

    if (isOverdue(todo, now)) {
        return `【未】${todo.name} (期限を${overtime}時間超過)`;
    } else {
        return `【未】${todo.name} (期限まで残り${overtime}時間)`;
    }
};

