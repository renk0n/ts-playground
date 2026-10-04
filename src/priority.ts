export function isValidPriority(value: number): boolean {
    if (!Number.isInteger(value)){
        return false
    }
    return value >= 1 && value <= 3;
}
const x: number = 10;
console.log(isValidPriority(x));