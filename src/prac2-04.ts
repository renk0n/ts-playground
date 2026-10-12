const numArr: number[] = [10, 11, 12, 13];
console.log("初期状態 => " + numArr);

const addToEnd = [...numArr, 14];
console.log("末尾に要素を追加 => " + addToEnd);

const addToStart = [9, ...numArr];
console.log("先頭に要素を追加 => " + addToStart);

const n = 2;
const insertedAtN = [...numArr.slice(0, n), 10.5, ...numArr.slice(n)];
console.log(`インデックス ${n} の位置に要素を挿入 => ` + insertedAtN);
