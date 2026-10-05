import { expect, test } from "vitest";
import {isValidPriority} from "./priority.js";

test("優先度2は有効", () => {
  expect(isValidPriority(2)).toBe(true);
});

test("下限の1は成功", () =>{
    expect(isValidPriority(1)).toBe(true);
});

test("上限の3は成功", () =>{
    expect(isValidPriority(3)).toBe(true);
});

test("下限より小さい０は無効" , () =>{
    expect(isValidPriority(0)).toBe(false);
});

test("上限より大きい4は無効", () =>{
    expect(isValidPriority(4)).toBe(false);
}
);

test("少数の1.5は無効", () =>{
    expect(isValidPriority(1.5)).toBe(false);
});

test("上限より大きいかつ少数の5.5は無効", () =>{
    expect(isValidPriority(4.5)).toBe(false);
})

test("負の優先度は無効", () => {
    expect(isValidPriority(-1)).toBe(false);
});

test("上限より少し大きい小数も無効", () => {
    expect(isValidPriority(3.1)).toBe(false);
});