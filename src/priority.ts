export function isValidPriority(value: number): boolean {
    return value >= 1 && value <= 3 && Number.isInteger(value);
}
const x: number = 10;
console.log(isValidPriority(x));