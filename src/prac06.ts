import dayjs from "dayjs";
import "dayjs/locale/ja";
import type {Nouryoku} from "./prac07.js";
import {nouRyoku} from "./prac07.js";

dayjs.locale("ja");
const deadline = new Date(2026, 9, 2, 14, 15);
const createdAt = new Date(2026, 8, 25, 9, 45);
const dtFmt = "YYYY/MM/DD (ddd) HH:mm"

const str =
    `期限 ${dayjs(deadline).format(dtFmt)}` +
    `(登録日 ${dayjs(createdAt).format(dtFmt)})`;
console.log(str)

const chara1: Nouryoku = {
    name: "tarou",
    tuyosa: 2,
    hayasa: 3,
    sukiru: "無敵",
};

nouRyoku(chara1);