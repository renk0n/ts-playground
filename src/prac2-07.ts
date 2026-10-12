const priorities = [3, 1, 2, 1];

/*const formattedPriorities = priorities.map((pri: number): string => {
  if (pri === 3) {
    return "★";
  } else if (pri === 2) {
    return "★★";
  } else {
    return "★★★";
  }
});
*/

const formattedPriorities = priorities.map((pri) => {
  return "★".repeat(4 - pri);
});

console.log(priorities);
console.log(formattedPriorities);
