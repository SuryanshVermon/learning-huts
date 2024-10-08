import dotenv from "dotenv";

dotenv.config();
export const {
    APP_PORT,
    DB_URL,
    APP_URL,
    DEBUG_MODE
} = process.env;
