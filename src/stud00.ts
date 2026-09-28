//ISO8601形式
const deadline: Date = new Date(2025, 9, 2, 14, 15)
//JST形式
const formatter = new Intl.DateTimeFormat("Ja-JP" ,{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
});
const strJP = deadline.toLocaleString("Ja-JP",{
    dateStyle: "long",
    timeStyle: "short",
});

console.log(formatter.format(deadline));
console.log(strJP);