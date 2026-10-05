import {date2str} from "./utils/date2str.js";

const deadline: Date = new Date(2025, 9, 2, 14, 15);
const createdAt: Date = new Date(2025, 8, 25, 9, 45);

// 関数の呼出し (テンプレート文字列の内部)
const str = `期限 ${date2str(deadline)} (登録日 ${date2str(createdAt)})`;
console.log(str);

//function comp(word1: string, word2: string): boolean{}

//function getAge(birthday: Date): number {}

//const dice = (): number => {};
//const num2str = (num: number): string => {};
//const comp = (word1: string, word2: string): boolean => {};
//const getAge = (birthday: Date): number => {};
//import {date2str} from "./utils/date2str.js";