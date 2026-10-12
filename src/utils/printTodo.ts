import dayjs from "dayjs";
import type { Todo } from "../types.js";

export const printTodo = ({ priority, name, deadline, isDone }: Todo): void => {
  const todoSummary =
    `(優先度: ${priority}) ${name} ` +
    `期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}.` +
    `完了の有無${isDone}`;
  console.log(todoSummary);
};
