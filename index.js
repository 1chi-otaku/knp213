
/* 
Common JS modules
ES modules - export-import

*/

import User from "./User.js";
import { PI } from "./User.js";
import chalk from "chalk";


const user = new User("Alex",22);

console.log(chalk.black(chalk.bgYellow(user.toString())));

console.log(PI);

