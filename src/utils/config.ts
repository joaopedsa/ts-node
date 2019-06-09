import * as dotenv from "dotenv";
dotenv.config({path: `${__dirname}/../../config/.env`})

export const url = process.env.URL