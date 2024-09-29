import path from 'node:path'
import fs from "node:fs";
import Logger from "./Logger.js"



const logger = new Logger("log.txt");

// logger.errSync("Error");

// logger.warnSync("This is a warming");


logger.warn("This is an async warning");
logger.err("This is an async error");
logger.info("This is an async info");

logger.warnSync("This is a sync warning");
logger.errSync("This is a sync error");
logger.infoSync("This is a sync info");

