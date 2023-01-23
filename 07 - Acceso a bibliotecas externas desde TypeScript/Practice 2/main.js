"use strict";
export const __esModule = true;
import dotenv_1 from "dotenv";
var result = dotenv_1["default"].config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
