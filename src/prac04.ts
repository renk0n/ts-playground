const deadline: Date = new Date(2025, 9, 2, 14, 15);

const year = deadline.getFullYear();
const month = String(deadline.getMonth()+1).padStart(2,"0");
const date = String(deadline.getDate()).padStart(2,"0");

console.log(`${year}/${month}/${date}`);