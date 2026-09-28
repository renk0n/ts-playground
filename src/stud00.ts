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
const year = deadline.getFullYear();
const month = String(deadline.getMonth()+1).padStart(2,"0");
const date = String(deadline.getDate()).padStart(2,"0");
const hour = String(deadline.getHours()).padStart(2,"0");
const minute = String(deadline.getMinutes()).padStart(2,"0");
console.log(formatter.format(deadline));
console.log(`${year}年${month}月${date}日${hour}時${minute}分`);