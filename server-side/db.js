import mysql from "mysql";


export const db = mysql.createConnection({
    host: "localhost",
    user: "bensql",
    password: "sunday1993",
    database: "blog",
});

