import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");
const deadline = new Date(2026, 9, 2, 14, 15);
const createdAt = new Date(2026, 8, 25, 9, 45);
const dtFmt = "YYYY/MM/DD (ddd) HH:mm"

const str =
    `期限 ${dayjs(deadline).format(dtFmt)}` +
    `(登録日 ${dayjs(createdAt).format(dtFmt)})`;
console.log(str)