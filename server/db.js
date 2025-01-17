//import var from env file
require('dotenv').config();

//import mysql2 this allows work with sql
const mysql=require('mysql2');

//create pool for connect to DB
const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

//working with promise
const db=pool.promise();


//checking connection
(async () => {
    try{
        await db.getConnection();
        console.log("Connected to the database!");
    }catch (err){
        console.error("Failed to connect to the database:", err);
    }
})();


//export connect db for uses
module.exports=db;
